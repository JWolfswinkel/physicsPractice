'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TOPICS, TopicId, UserProgress, LocalisedString } from '@/lib/types';
import { loadProgress, getRecentMistakes, resetProgress, exportProgress } from '@/lib/storage';
import { calculateAccuracy, formatTimeSpent } from '@/lib/grading';
import { useLanguage, topicNames } from '@/lib/i18n';

export default function DashboardPage() {
  const { t, language } = useLanguage();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [mounted, setMounted] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Helper to get localised text
  const getText = (text: LocalisedString): string => {
    if (typeof text === 'string') return text;
    return text[language] || text.en || '';
  };

  useEffect(() => {
    setMounted(true);
    setProgress(loadProgress());
  }, []);

  const handleExport = () => {
    const data = exportProgress();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `physics-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    resetProgress();
    setProgress(loadProgress());
    setShowResetConfirm(false);
  };

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-10 bg-slate-200 rounded w-48 mb-6"></div>
        <div className="grid gap-4">
          <div className="h-40 bg-slate-200 rounded-xl"></div>
          <div className="h-64 bg-slate-200 rounded-xl"></div>
        </div>
      </div>
    );
  }

  if (!progress || progress.totalAttempts === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📊</div>
        <h1 className="text-2xl font-bold text-slate-800 mb-4">{t('dashboard.noProgress')}</h1>
        <p className="text-slate-600 mb-6">
          {t('dashboard.noProgressDesc')}
        </p>
        <Link
          href="/topics"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          {t('dashboard.startPracticing')}
        </Link>
      </div>
    );
  }

  const overallAccuracy = calculateAccuracy(progress.totalCorrect, progress.totalAttempts);
  const recentMistakes = getRecentMistakes(5);

  // Find best and worst topics
  let bestTopic: TopicId | null = null;
  let worstTopic: TopicId | null = null;
  let bestAccuracy = 0;
  let worstAccuracy = 100;

  for (const topic of TOPICS) {
    const stats = progress.topicStats[topic.id];
    if (stats.totalAttempts > 0) {
      const accuracy = (stats.correctAttempts / stats.totalAttempts) * 100;
      if (accuracy > bestAccuracy) {
        bestAccuracy = accuracy;
        bestTopic = topic.id;
      }
      if (accuracy < worstAccuracy) {
        worstAccuracy = accuracy;
        worstTopic = topic.id;
      }
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800">{t('dashboard.title')}</h1>
        <div className="flex gap-2">
          <button
            onClick={handleExport}
            className="px-4 py-2 text-sm bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors"
          >
            {t('dashboard.exportData')}
          </button>
          <button
            onClick={() => setShowResetConfirm(true)}
            className="px-4 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
          >
            {t('dashboard.resetProgress')}
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-sm mx-4">
            <h2 className="text-lg font-semibold text-slate-800 mb-2">
              {t('dashboard.resetConfirmTitle')}
            </h2>
            <p className="text-slate-600 mb-4">
              {t('dashboard.resetConfirmDesc')}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 px-4 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
              >
                {t('dashboard.cancel')}
              </button>
              <button
                onClick={handleReset}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                {t('dashboard.reset')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="text-3xl font-bold text-primary-600">{progress.streak}</div>
          <div className="text-sm text-slate-500">{t('dashboard.dayStreak')}</div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="text-3xl font-bold text-slate-800">{overallAccuracy}%</div>
          <div className="text-sm text-slate-500">{t('dashboard.overallAccuracy')}</div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="text-3xl font-bold text-slate-800">{progress.totalAttempts}</div>
          <div className="text-sm text-slate-500">{t('dashboard.questionsAnswered')}</div>
        </div>
        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <div className="text-3xl font-bold text-success-600">{progress.totalCorrect}</div>
          <div className="text-sm text-slate-500">{t('dashboard.correctAnswers')}</div>
        </div>
      </div>

      {/* Topic Performance */}
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-200">
          <h2 className="font-semibold text-slate-800">{t('dashboard.topicPerformance')}</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {TOPICS.map((topic) => {
            const stats = progress.topicStats[topic.id];
            const accuracy = stats.totalAttempts > 0
              ? calculateAccuracy(stats.correctAttempts, stats.totalAttempts)
              : 0;
            const isBest = topic.id === bestTopic;
            const isWorst = topic.id === worstTopic && bestTopic !== worstTopic;
            const topicName = topicNames[topic.id]?.[language] || topic.name;

            return (
              <div key={topic.id} className="px-5 py-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{topic.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-800">{topicName}</span>
                      {isBest && stats.totalAttempts > 0 && (
                        <span className="px-2 py-0.5 bg-success-100 text-success-700 text-xs rounded-full">
                          {t('topics.best')}
                        </span>
                      )}
                      {isWorst && stats.totalAttempts > 0 && (
                        <span className="px-2 py-0.5 bg-warning-100 text-warning-700 text-xs rounded-full">
                          {t('topics.needsPractice')}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400">{language === 'en' ? topic.dutchName : topic.name}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-slate-800">
                      {stats.totalAttempts > 0 ? `${accuracy}%` : '-'}
                    </div>
                    <div className="text-xs text-slate-400">
                      {stats.totalAttempts} {t('topics.attempts')}
                    </div>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full progress-bar ${
                      accuracy >= 80
                        ? 'bg-success-500'
                        : accuracy >= 50
                        ? 'bg-warning-500'
                        : 'bg-error-500'
                    }`}
                    style={{ width: `${accuracy}%` }}
                  ></div>
                </div>

                {/* Stats row */}
                <div className="flex gap-4 mt-2 text-xs text-slate-500">
                  <span>✓ {stats.questionsMastered.length} {t('topics.mastered')}</span>
                  <span>⚠️ {stats.questionsToReview.length} {t('home.toReview')}</span>
                  {stats.averageTimePerQuestion > 0 && (
                    <span>⏱ {formatTimeSpent(stats.averageTimePerQuestion)} {t('dashboard.avg')}</span>
                  )}
                  {stats.lastPracticed && (
                    <span>{t('dashboard.last')}: {stats.lastPracticed}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="grid md:grid-cols-2 gap-4">
        {worstTopic && worstTopic !== bestTopic && (
          <Link
            href={`/practice/${worstTopic}`}
            className="bg-warning-50 rounded-xl p-5 border border-warning-200 hover:border-warning-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <div className="font-medium text-warning-800">{t('dashboard.focusArea')}</div>
                <div className="text-sm text-warning-600">
                  {topicNames[worstTopic]?.[language] || TOPICS.find((tp) => tp.id === worstTopic)?.name} {t('dashboard.practiceToImprove')}
                </div>
              </div>
            </div>
          </Link>
        )}

        {recentMistakes.length > 0 && (
          <Link
            href={`/practice/${recentMistakes[0].question.topic}`}
            className="bg-blue-50 rounded-xl p-5 border border-blue-200 hover:border-blue-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📝</span>
              <div>
                <div className="font-medium text-blue-800">{t('dashboard.reviewMistakes')}</div>
                <div className="text-sm text-blue-600">
                  {recentMistakes.length} {t('dashboard.recentMistakesToReview')}
                </div>
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Recent Mistakes */}
      {recentMistakes.length > 0 && (
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-200">
            <h2 className="font-semibold text-slate-800">{t('dashboard.recentMistakes')}</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {recentMistakes.map(({ attempt, question }) => (
              <div key={attempt.timestamp} className="px-5 py-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 text-lg">✗</span>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700 line-clamp-2 mb-1">
                      {getText(question.prompt)}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <span className="text-slate-500">
                        {topicNames[question.topic]?.[language] || TOPICS.find((tp) => tp.id === question.topic)?.name}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-500">
                        {new Date(attempt.timestamp).toLocaleDateString()}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-success-600">
                        {t('practice.correctAnswer')}: {question.correctAnswer}
                        {question.correctUnit && ` ${question.correctUnit}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
