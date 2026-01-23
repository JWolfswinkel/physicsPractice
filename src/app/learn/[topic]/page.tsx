'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TOPICS, TopicId } from '@/lib/types';
import { getTutorial, hasTutorial } from '@/data/tutorials';
import { useLanguage, topicNames } from '@/lib/i18n';
import TutorialSlide from '@/components/TutorialSlide';

interface LearnPageProps {
  params: { topic: string };
}

export default function LearnPage({ params }: LearnPageProps) {
  const router = useRouter();
  const topicId = params.topic as TopicId;
  const { t, language } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [mounted, setMounted] = useState(false);

  const topicInfo = TOPICS.find((tp) => tp.id === topicId);
  const tutorial = getTutorial(topicId);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'Escape') {
        router.push('/topics');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, tutorial]);

  const goToNext = () => {
    if (tutorial && currentSlide < tutorial.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          {language === 'nl' ? 'Onderwerp Niet Gevonden' : 'Topic Not Found'}
        </h1>
        <button
          onClick={() => router.push('/topics')}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          {language === 'nl' ? 'Terug naar Onderwerpen' : 'Back to Topics'}
        </button>
      </div>
    );
  }

  if (!tutorial || !hasTutorial(topicId)) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          {language === 'nl' ? 'Tutorial Komt Binnenkort' : 'Tutorial Coming Soon'}
        </h1>
        <p className="text-slate-600 mb-6">
          {language === 'nl'
            ? `De tutorial voor ${topicNames[topicId]?.[language] || topicInfo.name} is nog in ontwikkeling.`
            : `The tutorial for ${topicNames[topicId]?.[language] || topicInfo.name} is still being developed.`
          }
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => router.push('/topics')}
            className="px-6 py-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200"
          >
            {language === 'nl' ? 'Terug naar Onderwerpen' : 'Back to Topics'}
          </button>
          <button
            onClick={() => router.push(`/practice/${topicId}`)}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            {language === 'nl' ? 'Start met Oefenen' : 'Start Practicing'}
          </button>
        </div>
      </div>
    );
  }

  const topicName = topicNames[topicId]?.[language] || topicInfo.name;
  const slide = tutorial.slides[currentSlide];
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === tutorial.slides.length - 1;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{topicInfo.icon}</span>
          <div>
            <h1 className="font-semibold text-slate-800">{topicName}</h1>
            <p className="text-sm text-slate-500">
              {language === 'nl' ? 'Tutorial' : 'Tutorial'} • {tutorial.estimatedMinutes} min
            </p>
          </div>
        </div>
        <button
          onClick={() => router.push('/topics')}
          className="text-sm text-slate-500 hover:text-slate-700"
        >
          ← {language === 'nl' ? 'Sluiten' : 'Exit'}
        </button>
      </div>

      {/* Slide */}
      <TutorialSlide
        slide={slide}
        slideNumber={currentSlide + 1}
        totalSlides={tutorial.slides.length}
      />

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={goToPrev}
          disabled={isFirst}
          className={`px-6 py-3 rounded-lg font-medium transition-colors ${
            isFirst
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          ← {language === 'nl' ? 'Vorige' : 'Previous'}
        </button>

        {/* Slide dots */}
        <div className="flex gap-2">
          {tutorial.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide
                  ? 'bg-primary-500'
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {isLast ? (
          <button
            onClick={() => router.push(`/practice/${topicId}`)}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            {language === 'nl' ? 'Start Oefenen' : 'Start Practice'} →
          </button>
        ) : (
          <button
            onClick={goToNext}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            {language === 'nl' ? 'Volgende' : 'Next'} →
          </button>
        )}
      </div>

      {/* Keyboard hint */}
      <p className="text-center text-xs text-slate-400 mt-4">
        {language === 'nl'
          ? 'Tip: Gebruik ← → pijltjestoetsen om te navigeren'
          : 'Tip: Use ← → arrow keys to navigate'
        }
      </p>
    </div>
  );
}
