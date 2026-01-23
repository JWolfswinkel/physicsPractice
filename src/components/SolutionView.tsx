'use client';

import { useLanguage } from '@/lib/i18n';

interface SolutionViewProps {
  solutionSteps: string[];
  commonMistakes: string[];
  correctAnswer: string | number;
  correctUnit?: string;
}

export default function SolutionView({
  solutionSteps,
  commonMistakes,
  correctAnswer,
  correctUnit,
}: SolutionViewProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-4 animate-slide-up">
      {/* Correct Answer Summary */}
      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
        <div className="text-sm font-medium text-slate-600 mb-1">
          {t('solution.correctAnswer')}
        </div>
        <div className="text-lg font-semibold text-slate-800">
          {correctAnswer}
          {correctUnit && <span className="ml-1">{correctUnit}</span>}
        </div>
      </div>

      {/* Step-by-Step Solution */}
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-3 flex items-center gap-2">
          <span>📝</span>
          {t('solution.stepByStep')}
        </h4>
        <ol className="space-y-2">
          {solutionSteps.map((step, index) => (
            <li key={index} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-200 text-blue-700 rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </span>
              <span className="text-blue-800 text-sm">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Common Mistakes */}
      {commonMistakes.length > 0 && (
        <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
          <h4 className="font-medium text-orange-800 mb-2 flex items-center gap-2">
            <span>⚠️</span>
            {t('solution.commonMistakes')}
          </h4>
          <ul className="space-y-1">
            {commonMistakes.map((mistake, index) => (
              <li
                key={index}
                className="text-sm text-orange-700 flex items-start gap-2"
              >
                <span className="text-orange-400">•</span>
                <span>{mistake}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
