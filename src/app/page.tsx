'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TOPICS, TopicId, UserProgress, LocalisedString, VwoLevel, getTopicsForLevel } from '@/lib/types';
import { loadProgress, getRecommendedTopic, getRecentMistakes } from '@/lib/storage';
import { calculateAccuracy } from '@/lib/grading';
import { useLanguage, topicNames } from '@/lib/i18n';

export default function HomePage() {
  const { t, language } = useLanguage();

  // Helper to get localised text
  const getText = (text: LocalisedString): string => {
    if (typeof text === 'string') return text;
    return text[language] || text.en || '';
  };
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [recommendedTopic, setRecommendedTopic] = useState<TopicId | null>(null);
  const [mounted, setMounted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState<VwoLevel>(3);

  useEffect(() => {
    setMounted(true);
    setProgress(loadProgress());
    setRecommendedTopic(getRecommendedTopic());
    const savedLevel = localStorage.getItem('physics-practice-level');
    if (savedLevel === '3' || savedLevel === '4') {
      setSelectedLevel(Number(savedLevel) as VwoLevel);
    }
  }, []);

  if (!mounted) {
    return (
      <div className="animate-pulse">
        <div className="h-32 bg-slate-200 rounded-xl mb-8"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-32 bg-slate-200 rounded-lg"></div>
          ))}
        </div>
      </div>
    );
  }

  const recentMistakes = getRecentMistakes(3);
  const overallAccuracy = progress
    ? calculateAccuracy(progress.totalCorrect, progress.totalAttempts)
    : 0;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">{t('home.title')}</h1>
        <p className="text-primary-100 mb-4">
          {t('home.subtitle')}
        </p>

        {progress && progress.totalAttempts > 0 ? (
          <div className="flex flex-wrap gap-6 text-sm">
            <div>
              <span className="block text-primary-200">{t('home.streak')}</span>
              <span className="text-2xl font-bold">{progress.streak} {t('home.days')}</span>
            </div>
            <div>
              <span className="block text-primary-200">{t('home.overallAccuracy')}</span>
              <span className="text-2xl font-bold">{overallAccuracy}%</span>
            </div>
            <div>
              <span className="block text-primary-200">{t('home.questionsAttempted')}</span>
              <span className="text-2xl font-bold">{progress.totalAttempts}</span>
            </div>
          </div>
        ) : (
          <p className="text-primary-100">
            {t('home.startPracticing')}
          </p>
        )}
      </section>

      {/* Quick Actions */}
      <section className="flex flex-wrap gap-3">
        <Link
          href="/topics"
          className="flex-1 min-w-[200px] bg-white rounded-lg p-4 border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📚</span>
            <div>
              <div className="font-medium text-slate-800">{t('home.browseTopics')}</div>
              <div className="text-sm text-slate-500">{t('home.chooseWhatToPractice')}</div>
            </div>
          </div>
        </Link>

        {recommendedTopic && (
          <Link
            href={`/practice/${recommendedTopic}`}
            className="flex-1 min-w-[200px] bg-success-50 rounded-lg p-4 border border-success-200 hover:border-success-400 hover:shadow-md transition-all card-hover"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <div className="font-medium text-success-800">{t('home.recommended')}</div>
                <div className="text-sm text-success-600">
                  {topicNames[recommendedTopic]?.[language] || TOPICS.find((topic) => topic.id === recommendedTopic)?.name}
                </div>
              </div>
            </div>
          </Link>
        )}

        <Link
          href="/dashboard"
          className="flex-1 min-w-[200px] bg-white rounded-lg p-4 border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all card-hover"
        >
          <div className="flex items-center gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <div className="font-medium text-slate-800">{t('home.dashboard')}</div>
              <div className="text-sm text-slate-500">{t('home.viewProgress')}</div>
            </div>
          </div>
        </Link>
      </section>

      {/* Topics Grid */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-800">{t('home.topics')}</h2>
          <div className="flex gap-1">
            {([3, 4] as VwoLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => {
                  setSelectedLevel(level);
                  localStorage.setItem('physics-practice-level', String(level));
                }}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-primary-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t(`level.vwo${level}`)}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {getTopicsForLevel(selectedLevel).map((topic) => {
            const stats = progress?.topicStats[topic.id];
            const accuracy = stats && stats.totalAttempts > 0
              ? calculateAccuracy(stats.correctAttempts, stats.totalAttempts)
              : null;
            const needsReview = stats && stats.questionsToReview.length > 0;
            const topicName = topicNames[topic.id]?.[language] || topic.name;

            return (
              <Link
                key={topic.id}
                href={`/practice/${topic.id}`}
                className="bg-white rounded-lg p-4 border border-slate-200 hover:border-primary-300 hover:shadow-md transition-all card-hover"
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{topic.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-slate-800 truncate">
                      {topicName}
                    </div>
                    <div className="text-xs text-slate-400 truncate mb-2">
                      {language === 'en' ? topic.dutchName : topic.name}
                    </div>

                    {accuracy !== null ? (
                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary-500 progress-bar"
                            style={{ width: `${accuracy}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-slate-500 w-10">
                          {accuracy}%
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400">{t('home.notStarted')}</span>
                    )}

                    {needsReview && (
                      <div className="mt-2 text-xs text-warning-600 flex items-center gap-1">
                        <span>⚠️</span>
                        <span>{stats.questionsToReview.length} {t('home.toReview')}</span>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent Mistakes */}
      {recentMistakes.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            {t('home.recentMistakes')}
          </h2>
          <div className="bg-white rounded-lg border border-slate-200 divide-y divide-slate-100">
            {recentMistakes.map(({ attempt, question }) => (
              <div key={attempt.timestamp} className="p-4">
                <div className="flex items-start gap-3">
                  <span className="text-red-500">✗</span>
                  <div className="flex-1">
                    <p className="text-sm text-slate-700 line-clamp-2">
                      {getText(question.prompt)}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      {topicNames[question.topic]?.[language] || TOPICS.find((tp) => tp.id === question.topic)?.name} •{' '}
                      {new Date(attempt.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  <Link
                    href={`/practice/${question.topic}`}
                    className="text-xs text-primary-600 hover:text-primary-700"
                  >
                    {t('home.practice')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
