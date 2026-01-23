/**
 * Core type definitions for the Physics Practice App
 * VWO-3 level physics practice application
 */

// Supported languages
export type Language = 'en' | 'nl';

// Localised string - can be a simple string (English only) or multilingual object
export type LocalisedString = string | { en: string; nl: string };

// Answer type enumeration for different question formats
export type AnswerType = 'mcq' | 'numeric' | 'text';

// Difficulty levels: 1 = basic, 2 = intermediate, 3 = advanced
export type Difficulty = 1 | 2 | 3;

// Topic identifiers matching the VWO-3 physics curriculum
export type TopicId =
  | 'forces-newton'      // Forces and Newton's Laws (Krachten en Newton's wetten)
  | 'energy-work'        // Energy and Work (Energie en arbeid)
  | 'power'              // Power (Vermogen)
  | 'motion-graphs'      // Motion Graphs (Bewegingsdiagrammen)
  | 'density-pressure'   // Density and Pressure (Dichtheid en druk)
  | 'circuits';          // Simple Circuits (Elektrische schakelingen)

// Topic metadata for display and organization
export interface TopicInfo {
  id: TopicId;
  name: string;
  dutchName: string;
  description: string;
  icon: string; // Emoji for simple visual identification
}

// Tolerance configuration for numeric answers
export interface NumericTolerance {
  absolute?: number;  // Absolute tolerance (e.g., ±0.1)
  relative?: number;  // Relative tolerance as fraction (e.g., 0.05 = 5%)
}

// Core question structure with multilingual support
export interface Question {
  id: string;
  topic: TopicId;
  difficulty: Difficulty;
  prompt: LocalisedString;           // Question text (EN/NL)
  answerType: AnswerType;

  // MCQ-specific fields - choices can be localised
  choices?: LocalisedString[];

  // Answer fields - correctAnswer stays in original form (numbers/identifiers)
  correctAnswer: string | number;
  tolerance?: NumericTolerance;

  // Unit handling for numeric questions
  unitOptions?: string[];
  correctUnit?: string;

  // Learning support - all localised
  hints: LocalisedString[];              // Progressive hints (max 3)
  solutionSteps: LocalisedString[];      // Step-by-step worked solution
  commonMistakes: LocalisedString[];     // Common errors students make

  // Dutch keywords for searchability (always Dutch)
  dutchKeywords?: string[];
}

// Question bank structure
export interface QuestionBank {
  version: string;
  lastUpdated: string;
  questions: Question[];
}

// Individual attempt record
export interface Attempt {
  questionId: string;
  timestamp: number;              // Unix timestamp
  correct: boolean;
  givenAnswer: string | number;
  givenUnit?: string;
  timeSpent: number;              // Seconds spent on question
  hintsUsed: number;              // Number of hints revealed
}

// Statistics for a single topic
export interface TopicStats {
  totalAttempts: number;
  correctAttempts: number;
  lastPracticed: string;          // ISO date string
  questionsMastered: string[];    // Question IDs with 3+ correct streaks
  questionsToReview: string[];    // Question IDs that need spaced repetition
  averageTimePerQuestion: number; // Average seconds per question
}

// Complete user progress state
export interface UserProgress {
  attempts: Attempt[];
  topicStats: Record<TopicId, TopicStats>;
  streak: number;                 // Consecutive days practiced
  lastPracticeDate: string;       // ISO date string
  totalCorrect: number;
  totalAttempts: number;
}

// Practice session configuration
export interface PracticeSession {
  topic: TopicId;
  questions: Question[];
  currentIndex: number;
  startTime: number;
  attempts: Attempt[];
  completed: boolean;
}

// Result of grading an answer
export interface GradingResult {
  correct: boolean;
  feedback: string;
  feedbackKey?: string;           // i18n key for feedback
  correctAnswer: string | number;
  correctUnit?: string;
  tolerance?: NumericTolerance;
}

// Admin question form data (for creating/editing questions)
export interface QuestionFormData {
  id?: string;
  topic: TopicId;
  difficulty: Difficulty;
  promptEn: string;
  promptNl: string;
  answerType: AnswerType;
  choicesEn?: string[];
  choicesNl?: string[];
  correctAnswer: string;
  toleranceAbsolute?: number;
  toleranceRelative?: number;
  unitOptions?: string[];
  correctUnit?: string;
  hintsEn: string[];
  hintsNl: string[];
  solutionStepsEn: string[];
  solutionStepsNl: string[];
  commonMistakesEn: string[];
  commonMistakesNl: string[];
  dutchKeywords?: string[];
}

// Topic configuration with display info
export const TOPICS: TopicInfo[] = [
  {
    id: 'forces-newton',
    name: 'Forces & Newton\'s Laws',
    dutchName: 'Krachten en Newton\'s wetten',
    description: 'Learn about forces, friction, and Newton\'s three laws of motion.',
    icon: '🚀'
  },
  {
    id: 'energy-work',
    name: 'Energy & Work',
    dutchName: 'Energie en arbeid',
    description: 'Understand kinetic energy, potential energy, and the work-energy theorem.',
    icon: '⚡'
  },
  {
    id: 'power',
    name: 'Power',
    dutchName: 'Vermogen',
    description: 'Calculate power as the rate of energy transfer or work done per unit time.',
    icon: '💪'
  },
  {
    id: 'motion-graphs',
    name: 'Motion Graphs',
    dutchName: 'Bewegingsdiagrammen',
    description: 'Interpret and analyze position-time, velocity-time, and acceleration-time graphs.',
    icon: '📈'
  },
  {
    id: 'density-pressure',
    name: 'Density & Pressure',
    dutchName: 'Dichtheid en druk',
    description: 'Work with density, pressure in fluids, and buoyancy concepts.',
    icon: '🌊'
  },
  {
    id: 'circuits',
    name: 'Electric Circuits',
    dutchName: 'Elektrische schakelingen',
    description: 'Analyze series and parallel circuits with resistors, voltage, and current.',
    icon: '🔌'
  }
];

// Default empty progress state
export const DEFAULT_PROGRESS: UserProgress = {
  attempts: [],
  topicStats: {
    'forces-newton': {
      totalAttempts: 0,
      correctAttempts: 0,
      lastPracticed: '',
      questionsMastered: [],
      questionsToReview: [],
      averageTimePerQuestion: 0
    },
    'energy-work': {
      totalAttempts: 0,
      correctAttempts: 0,
      lastPracticed: '',
      questionsMastered: [],
      questionsToReview: [],
      averageTimePerQuestion: 0
    },
    'power': {
      totalAttempts: 0,
      correctAttempts: 0,
      lastPracticed: '',
      questionsMastered: [],
      questionsToReview: [],
      averageTimePerQuestion: 0
    },
    'motion-graphs': {
      totalAttempts: 0,
      correctAttempts: 0,
      lastPracticed: '',
      questionsMastered: [],
      questionsToReview: [],
      averageTimePerQuestion: 0
    },
    'density-pressure': {
      totalAttempts: 0,
      correctAttempts: 0,
      lastPracticed: '',
      questionsMastered: [],
      questionsToReview: [],
      averageTimePerQuestion: 0
    },
    'circuits': {
      totalAttempts: 0,
      correctAttempts: 0,
      lastPracticed: '',
      questionsMastered: [],
      questionsToReview: [],
      averageTimePerQuestion: 0
    }
  },
  streak: 0,
  lastPracticeDate: '',
  totalCorrect: 0,
  totalAttempts: 0
};

// Helper function to get localised text
export function getLocalised(text: LocalisedString, language: Language): string {
  if (typeof text === 'string') {
    return text;
  }
  return text[language] || text.en || '';
}

// Tutorial slide types
export type SlideType = 'title' | 'concept' | 'formula' | 'example' | 'diagram' | 'summary' | 'quiz';

// A single tutorial slide
export interface TutorialSlide {
  id: string;
  type: SlideType;
  title: LocalisedString;
  content: LocalisedString;
  // Optional fields based on slide type
  formula?: string;                    // LaTeX or plain text formula
  formulaExplanation?: LocalisedString;
  image?: string;                      // Path to image/diagram
  imageAlt?: LocalisedString;
  bulletPoints?: LocalisedString[];
  example?: {
    problem: LocalisedString;
    solution: LocalisedString[];
  };
  keyTerms?: Array<{
    term: LocalisedString;
    definition: LocalisedString;
  }>;
}

// Complete tutorial for a topic
export interface Tutorial {
  topicId: TopicId;
  title: LocalisedString;
  description: LocalisedString;
  estimatedMinutes: number;
  slides: TutorialSlide[];
}
