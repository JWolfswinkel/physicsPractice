'use client';

import { useLanguage } from '@/lib/i18n';

interface HintSystemProps {
  hints: string[];
  hintsRevealed: number;
  onRevealHint: () => void;
}

export default function HintSystem({
  hints,
  hintsRevealed,
  onRevealHint,
}: HintSystemProps) {
  const { t } = useLanguage();
  const hasMoreHints = hintsRevealed < hints.length;

  return (
    <div className="space-y-3">
      {/* Revealed Hints */}
      {hintsRevealed > 0 && (
        <div className="space-y-2">
          {hints.slice(0, hintsRevealed).map((hint, index) => (
            <div
              key={index}
              className="bg-amber-50 border border-amber-200 rounded-lg p-3 animate-slide-up"
            >
              <div className="flex items-start gap-2">
                <span className="text-amber-500">💡</span>
                <div>
                  <span className="text-xs font-medium text-amber-700 uppercase">
                    {t('hint.hint')} {index + 1}
                  </span>
                  <p className="text-sm text-amber-800 mt-0.5">{hint}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Get Hint Button */}
      {hasMoreHints && (
        <button
          onClick={onRevealHint}
          className="flex items-center gap-2 text-sm text-amber-600 hover:text-amber-700 transition-colors"
        >
          <span>🤔</span>
          <span>
            {t('hint.imStuck')} ({hintsRevealed + 1}/{hints.length})
          </span>
        </button>
      )}

      {/* All hints used */}
      {!hasMoreHints && hintsRevealed > 0 && (
        <p className="text-xs text-slate-400">
          {t('hint.allRevealed')}
        </p>
      )}
    </div>
  );
}
