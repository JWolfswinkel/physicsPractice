'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Question, TopicId, GradingResult, Attempt, TOPICS, LocalisedString } from '@/lib/types';
import { getQuestionsForTopic, recordAttempt, getQuestionById } from '@/lib/storage';
import QuestionCard from '@/components/QuestionCard';
import { useLanguage, topicNames } from '@/lib/i18n';

interface PracticePageProps {
  params: { topic: string };
}

interface SessionResult {
  correct: number;
  total: number;
  attempts: Attempt[];
}

export default function PracticePage({ params }: PracticePageProps) {
  const router = useRouter();
  const topicId = params.topic as TopicId;
  const { t, language } = useLanguage();

  // Helper to get localised text
  const getText = (text: LocalisedString): string => {
    if (typeof text === 'string') return text;
    return text[language] || text.en || '';
  };

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sessionResults, setSessionResults] = useState<SessionResult>({
    correct: 0,
    total: 0,
    attempts: [],
  });
  const [isComplete, setIsComplete] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Find topic info
  const topicInfo = TOPICS.find((t) => t.id === topicId);

  useEffect(() => {
    setMounted(true);

    // Load questions for this topic
    const loadedQuestions = getQuestionsForTopic(topicId, 8);
    setQuestions(loadedQuestions);
  }, [topicId]);

  const handleAnswer = (result: GradingResult, timeSpent: number, hintsUsed: number) => {
    const question = questions[currentIndex];

    // Create attempt record
    const attempt: Attempt = {
      questionId: question.id,
      timestamp: Date.now(),
      correct: result.correct,
      givenAnswer: result.correct ? result.correctAnswer : '',
      timeSpent,
      hintsUsed,
    };

    // Record attempt and update progress
    recordAttempt(attempt, question);

    // Update session results
    setSessionResults((prev) => ({
      correct: prev.correct + (result.correct ? 1 : 0),
      total: prev.total + 1,
      attempts: [...prev.attempts, attempt],
    }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    const newQuestions = getQuestionsForTopic(topicId, 8);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSessionResults({ correct: 0, total: 0, attempts: [] });
    setIsComplete(false);
  };

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-slate-200 rounded w-48 mb-6"></div>
        <div className="h-96 bg-slate-200 rounded-xl"></div>
      </div>
    );
  }

  if (!topicInfo) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">{t('practice.topicNotFound')}</h1>
        <p className="text-slate-600 mb-6">
          {t('practice.topicNotFoundDesc')}
        </p>
        <button
          onClick={() => router.push('/topics')}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          {t('practice.backToTopics')}
        </button>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">{t('practice.noQuestions')}</h1>
        <p className="text-slate-600 mb-6">
          {t('practice.noQuestionsDesc')}
        </p>
        <button
          onClick={() => router.push('/topics')}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          {t('practice.backToTopics')}
        </button>
      </div>
    );
  }

  // Show results when complete
  if (isComplete) {
    const accuracy = Math.round((sessionResults.correct / sessionResults.total) * 100);
    const topicName = topicNames[topicId]?.[language] || topicInfo.name;

    return (
      <div className="max-w-2xl mx-auto">
        {/* Results Header */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center mb-6">
          <div className="text-6xl mb-4">
            {accuracy >= 80 ? '🎉' : accuracy >= 50 ? '👍' : '📚'}
          </div>
          <h1 className="text-2xl font-bold text-slate-800 mb-2">{t('practice.sessionComplete')}</h1>
          <p className="text-slate-600 mb-6">
            {topicInfo.icon} {topicName}
          </p>

          {/* Score */}
          <div className="inline-flex items-center gap-4 bg-slate-50 rounded-lg px-6 py-4 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600">{accuracy}%</div>
              <div className="text-sm text-slate-500">{t('practice.accuracy')}</div>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-slate-800">
                {sessionResults.correct}/{sessionResults.total}
              </div>
              <div className="text-sm text-slate-500">{t('practice.correct')}</div>
            </div>
          </div>

          {/* Feedback message */}
          <p className="text-slate-600 mb-6">
            {accuracy >= 80
              ? t('practice.excellentWork')
              : accuracy >= 50
              ? t('practice.goodEffort')
              : t('practice.keepGoing')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              {t('practice.practiceAgain')}
            </button>
            <button
              onClick={() => router.push('/topics')}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              {t('practice.chooseAnotherTopic')}
            </button>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
            >
              {t('practice.viewProgress')}
            </button>
          </div>
        </div>

        {/* Question Review */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="font-semibold text-slate-800 mb-4">{t('practice.sessionReview')}</h2>
          <div className="space-y-3">
            {sessionResults.attempts.map((attempt, index) => {
              const question = getQuestionById(attempt.questionId);
              return (
                <div
                  key={index}
                  className={`p-3 rounded-lg border ${
                    attempt.correct
                      ? 'bg-success-50 border-success-200'
                      : 'bg-error-50 border-error-200'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg">{attempt.correct ? '✓' : '✗'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-700 line-clamp-2">
                        {question ? getText(question.prompt) : ''}
                      </p>
                      {!attempt.correct && question && (
                        <p className="text-xs text-slate-500 mt-1">
                          {t('practice.correctAnswer')}: {question.correctAnswer}
                          {question.correctUnit && ` ${question.correctUnit}`}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-slate-400">
                      {attempt.timeSpent}s
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Show current question
  const currentQuestion = questions[currentIndex];
  const topicName = topicNames[topicId]?.[language] || topicInfo.name;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Topic Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{topicInfo.icon}</span>
          <div>
            <h1 className="font-semibold text-slate-800">{topicName}</h1>
            <p className="text-sm text-slate-500">{language === 'en' ? topicInfo.dutchName : topicInfo.name}</p>
          </div>
        </div>
        <button
          onClick={() => router.push('/topics')}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          ← {t('practice.exit')}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-slate-500 mb-2">
          <span>{t('practice.progress')}</span>
          <span>
            {sessionResults.correct} {t('practice.correctOf')} {currentIndex} {t('practice.answered')}
          </span>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-500 progress-bar"
            style={{ width: `${((currentIndex) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        onAnswer={handleAnswer}
        onNext={handleNext}
      />
    </div>
  );
}
