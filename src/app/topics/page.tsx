'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TOPICS, TopicId, UserProgress } from '@/lib/types';
import { loadProgress, loadQuestions } from '@/lib/storage';
import { calculateAccuracy } from '@/lib/grading';
import { useLanguage, topicNames, topicDescriptions } from '@/lib/i18n';
import { hasTutorial } from '@/data/tutorials';

export default function TopicsPage() {
  const { t, language } = useLanguage();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [questionCounts, setQuestionCounts] = useState<Record<TopicId, number>>({} as Record<TopicId, number>);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProgress(loadProgress());

    // Count questions per topic
    const questions = loadQuestions();
    const counts: Record<TopicId, number> = {} as Record<TopicId, number>;
    for (const topic of TOPICS) {
      counts[topic.id] = questions.filter((q) => q.topic === topic.id).length;
    }
    setQuestionCounts(counts);
  }, []);

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-10 bg-slate-200 rounded w-48 mb-6"></div>
        <div className="grid gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-32 bg-slate-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">{t('topics.title')}</h1>
        <p className="text-slate-600 mt-1">
          {t('topics.subtitle')}
        </p>
      </div>

      <div className="grid gap-4">
        {TOPICS.map((topic) => {
          const stats = progress?.topicStats[topic.id];
          const accuracy = stats && stats.totalAttempts > 0
            ? calculateAccuracy(stats.correctAttempts, stats.totalAttempts)
            : null;
          const masteredCount = stats?.questionsMastered.length || 0;
          const reviewCount = stats?.questionsToReview.length || 0;
          const totalQuestions = questionCounts[topic.id] || 0;
          const topicName = topicNames[topic.id]?.[language] || topic.name;
          const topicDesc = topicDescriptions[topic.id]?.[language] || topic.description;

          const topicHasTutorial = hasTutorial(topic.id);

          return (
            <div
              key={topic.id}
              className="bg-white rounded-xl p-5 border border-slate-200 hover:border-primary-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <span className="text-4xl">{topic.icon}</span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h2 className="text-lg font-semibold text-slate-800">
                      {topicName}
                    </h2>
                    {reviewCount > 0 && (
                      <span className="px-2 py-0.5 bg-warning-100 text-warning-700 text-xs rounded-full">
                        {reviewCount} {t('home.toReview')}
                      </span>
                    )}
                    {topicHasTutorial && (
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {language === 'nl' ? 'Tutorial' : 'Tutorial'}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-500 mb-1">{language === 'en' ? topic.dutchName : topic.name}</p>
                  <p className="text-sm text-slate-600 mb-3">{topicDesc}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1 text-slate-500">
                      <span>📝</span>
                      <span>{totalQuestions} {t('topics.questions')}</span>
                    </div>

                    {accuracy !== null && (
                      <div className="flex items-center gap-1 text-slate-500">
                        <span>📊</span>
                        <span>{accuracy}% {t('topics.accuracy')}</span>
                      </div>
                    )}

                    {masteredCount > 0 && (
                      <div className="flex items-center gap-1 text-success-600">
                        <span>✓</span>
                        <span>{masteredCount} {t('topics.mastered')}</span>
                      </div>
                    )}

                    {stats && stats.totalAttempts > 0 && (
                      <div className="flex items-center gap-1 text-slate-500">
                        <span>🎯</span>
                        <span>{stats.totalAttempts} {t('topics.attempts')}</span>
                      </div>
                    )}
                  </div>

                  {/* Progress bar */}
                  {accuracy !== null && (
                    <div className="mt-3">
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-500 progress-bar"
                          style={{ width: `${accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Action buttons */}
                  <div className="flex gap-3 mt-4">
                    {topicHasTutorial && (
                      <Link
                        href={`/learn/${topic.id}`}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        📚 {language === 'nl' ? 'Leer Theorie' : 'Learn Theory'}
                      </Link>
                    )}
                    <Link
                      href={`/practice/${topic.id}`}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      🎯 {language === 'nl' ? 'Oefenen' : 'Practice'}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-medium mb-1">{t('topics.howItWorks')}</p>
        <ul className="list-disc list-inside space-y-1 text-blue-700">
          <li>{t('topics.howItWorks1')}</li>
          <li>{t('topics.howItWorks2')}</li>
          <li>{t('topics.howItWorks3')}</li>
          <li>{t('topics.howItWorks4')}</li>
        </ul>
      </div>
    </div>
  );
}
