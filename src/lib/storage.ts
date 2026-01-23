/**
 * localStorage persistence utilities for user progress
 * Handles saving/loading attempts and progress data
 */

import {
  UserProgress,
  Attempt,
  TopicStats,
  TopicId,
  Question,
  DEFAULT_PROGRESS,
} from './types';
import questionsData from '@/data/questions.json';

const STORAGE_KEY = 'physics-practice-progress';
const QUESTIONS_KEY = 'physics-practice-questions';

/**
 * Load user progress from localStorage
 */
export function loadProgress(): UserProgress {
  if (typeof window === 'undefined') {
    return DEFAULT_PROGRESS;
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return DEFAULT_PROGRESS;
    }

    const parsed = JSON.parse(stored) as UserProgress;

    // Ensure all topics exist (in case new topics were added)
    const topicIds: TopicId[] = [
      'forces-newton',
      'energy-work',
      'power',
      'motion-graphs',
      'density-pressure',
      'circuits',
    ];

    for (const topicId of topicIds) {
      if (!parsed.topicStats[topicId]) {
        parsed.topicStats[topicId] = {
          totalAttempts: 0,
          correctAttempts: 0,
          lastPracticed: '',
          questionsMastered: [],
          questionsToReview: [],
          averageTimePerQuestion: 0,
        };
      }
    }

    return parsed;
  } catch (error) {
    console.error('Error loading progress:', error);
    return DEFAULT_PROGRESS;
  }
}

/**
 * Save user progress to localStorage
 */
export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
}

/**
 * Record a new attempt and update progress
 */
export function recordAttempt(attempt: Attempt, question: Question): UserProgress {
  const progress = loadProgress();

  // Add to attempts array
  progress.attempts.push(attempt);

  // Update total counts
  progress.totalAttempts++;
  if (attempt.correct) {
    progress.totalCorrect++;
  }

  // Update topic stats
  const topicStats = progress.topicStats[question.topic];
  topicStats.totalAttempts++;
  if (attempt.correct) {
    topicStats.correctAttempts++;
  }
  topicStats.lastPracticed = new Date().toISOString().split('T')[0];

  // Update average time per question
  const topicAttempts = progress.attempts.filter(
    (a) => {
      // Find the question to check its topic
      const q = getQuestionById(a.questionId);
      return q && q.topic === question.topic;
    }
  );
  const totalTime = topicAttempts.reduce((sum, a) => sum + a.timeSpent, 0);
  topicStats.averageTimePerQuestion = Math.round(totalTime / topicAttempts.length);

  // Update mastered and review lists
  updateMasteryStatus(progress, question.id, question.topic, attempt.correct);

  // Update streak
  updateStreak(progress);

  // Save and return
  saveProgress(progress);
  return progress;
}

/**
 * Update mastery status for a question
 * A question is mastered after 3 correct answers in a row
 * A question needs review after getting it wrong
 */
function updateMasteryStatus(
  progress: UserProgress,
  questionId: string,
  topic: TopicId,
  correct: boolean
): void {
  const topicStats = progress.topicStats[topic];

  // Get recent attempts for this question
  const questionAttempts = progress.attempts
    .filter((a) => a.questionId === questionId)
    .slice(-5); // Last 5 attempts

  if (correct) {
    // Check if last 3 attempts are all correct
    const lastThree = questionAttempts.slice(-3);
    if (lastThree.length >= 3 && lastThree.every((a) => a.correct)) {
      // Add to mastered if not already
      if (!topicStats.questionsMastered.includes(questionId)) {
        topicStats.questionsMastered.push(questionId);
      }
      // Remove from review list
      topicStats.questionsToReview = topicStats.questionsToReview.filter(
        (id) => id !== questionId
      );
    }
  } else {
    // Add to review list if not already
    if (!topicStats.questionsToReview.includes(questionId)) {
      topicStats.questionsToReview.push(questionId);
    }
    // Remove from mastered list (needs re-mastery)
    topicStats.questionsMastered = topicStats.questionsMastered.filter(
      (id) => id !== questionId
    );
  }
}

/**
 * Update the practice streak
 */
function updateStreak(progress: UserProgress): void {
  const today = new Date().toISOString().split('T')[0];

  if (!progress.lastPracticeDate) {
    // First time practicing
    progress.streak = 1;
    progress.lastPracticeDate = today;
    return;
  }

  const lastDate = new Date(progress.lastPracticeDate);
  const todayDate = new Date(today);

  // Calculate days difference
  const diffTime = todayDate.getTime() - lastDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    // Same day, streak unchanged
  } else if (diffDays === 1) {
    // Consecutive day, increase streak
    progress.streak++;
  } else {
    // Streak broken, reset to 1
    progress.streak = 1;
  }

  progress.lastPracticeDate = today;
}

/**
 * Get questions for a topic, prioritizing those needing review
 */
export function getQuestionsForTopic(
  topic: TopicId,
  count: number = 10
): Question[] {
  const allQuestions = loadQuestions();
  const progress = loadProgress();
  const topicStats = progress.topicStats[topic];

  // Filter questions for this topic
  const topicQuestions = allQuestions.filter((q) => q.topic === topic);

  if (topicQuestions.length === 0) {
    return [];
  }

  // Prioritize questions that need review (spaced repetition-ish)
  const needsReview = topicQuestions.filter((q) =>
    topicStats.questionsToReview.includes(q.id)
  );
  const mastered = topicQuestions.filter((q) =>
    topicStats.questionsMastered.includes(q.id)
  );
  const unseen = topicQuestions.filter(
    (q) =>
      !topicStats.questionsToReview.includes(q.id) &&
      !topicStats.questionsMastered.includes(q.id)
  );

  // Selection strategy:
  // 1. Include all questions needing review (up to count)
  // 2. Fill remaining slots with unseen questions
  // 3. If still need more, add mastered questions for reinforcement
  const selected: Question[] = [];

  // Add review questions (shuffle first)
  const shuffledReview = shuffleArray([...needsReview]);
  selected.push(...shuffledReview.slice(0, count));

  // Add unseen questions
  if (selected.length < count) {
    const shuffledUnseen = shuffleArray([...unseen]);
    selected.push(...shuffledUnseen.slice(0, count - selected.length));
  }

  // Add mastered questions if needed
  if (selected.length < count) {
    const shuffledMastered = shuffleArray([...mastered]);
    selected.push(...shuffledMastered.slice(0, count - selected.length));
  }

  // Final shuffle to mix difficulty and types
  return shuffleArray(selected);
}

/**
 * Get recommended topic based on performance
 */
export function getRecommendedTopic(): TopicId | null {
  const progress = loadProgress();
  const topics: TopicId[] = [
    'forces-newton',
    'energy-work',
    'power',
    'motion-graphs',
    'density-pressure',
    'circuits',
  ];

  // Find topic with lowest accuracy that has been attempted
  let lowestAccuracy = 100;
  let recommendedTopic: TopicId | null = null;

  for (const topic of topics) {
    const stats = progress.topicStats[topic];

    if (stats.totalAttempts > 0) {
      const accuracy = (stats.correctAttempts / stats.totalAttempts) * 100;
      if (accuracy < lowestAccuracy) {
        lowestAccuracy = accuracy;
        recommendedTopic = topic;
      }
    } else {
      // Prefer untried topics
      return topic;
    }
  }

  // If all topics are above 90% accuracy, pick the one with most questions to review
  if (lowestAccuracy >= 90) {
    let maxReview = 0;
    for (const topic of topics) {
      const reviewCount = progress.topicStats[topic].questionsToReview.length;
      if (reviewCount > maxReview) {
        maxReview = reviewCount;
        recommendedTopic = topic;
      }
    }
  }

  return recommendedTopic;
}

/**
 * Get recent mistakes for review
 */
export function getRecentMistakes(limit: number = 10): { attempt: Attempt; question: Question }[] {
  const progress = loadProgress();
  const allQuestions = loadQuestions();

  // Get incorrect attempts, most recent first
  const incorrectAttempts = progress.attempts
    .filter((a) => !a.correct)
    .sort((a, b) => b.timestamp - a.timestamp)
    .slice(0, limit);

  return incorrectAttempts
    .map((attempt) => {
      const question = allQuestions.find((q) => q.id === attempt.questionId);
      return question ? { attempt, question } : null;
    })
    .filter((item): item is { attempt: Attempt; question: Question } => item !== null);
}

/**
 * Load all questions from the question bank
 */
export function loadQuestions(): Question[] {
  // Check for custom questions in localStorage first
  if (typeof window !== 'undefined') {
    try {
      const customQuestions = localStorage.getItem(QUESTIONS_KEY);
      if (customQuestions) {
        const parsed = JSON.parse(customQuestions);
        if (parsed.questions && Array.isArray(parsed.questions)) {
          return parsed.questions as Question[];
        }
      }
    } catch (error) {
      console.error('Error loading custom questions:', error);
    }
  }

  // Fall back to default questions
  return questionsData.questions as Question[];
}

/**
 * Save custom questions (for admin mode)
 */
export function saveQuestions(questions: Question[]): void {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const data = {
      version: '1.0.0',
      lastUpdated: new Date().toISOString().split('T')[0],
      questions,
    };
    localStorage.setItem(QUESTIONS_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Error saving questions:', error);
  }
}

/**
 * Get a question by ID
 */
export function getQuestionById(id: string): Question | undefined {
  const questions = loadQuestions();
  return questions.find((q) => q.id === id);
}

/**
 * Export progress as JSON for backup
 */
export function exportProgress(): string {
  const progress = loadProgress();
  return JSON.stringify(progress, null, 2);
}

/**
 * Import progress from JSON backup
 */
export function importProgress(jsonString: string): boolean {
  try {
    const parsed = JSON.parse(jsonString) as UserProgress;

    // Basic validation
    if (!parsed.attempts || !parsed.topicStats) {
      return false;
    }

    saveProgress(parsed);
    return true;
  } catch (error) {
    console.error('Error importing progress:', error);
    return false;
  }
}

/**
 * Reset all progress
 */
export function resetProgress(): void {
  saveProgress(DEFAULT_PROGRESS);
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
