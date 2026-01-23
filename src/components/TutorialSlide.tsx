'use client';

import { TutorialSlide as TutorialSlideType, LocalisedString } from '@/lib/types';
import { useLanguage } from '@/lib/i18n';

interface TutorialSlideProps {
  slide: TutorialSlideType;
  slideNumber: number;
  totalSlides: number;
}

export default function TutorialSlide({ slide, slideNumber, totalSlides }: TutorialSlideProps) {
  const { language } = useLanguage();

  const getText = (text: LocalisedString): string => {
    if (typeof text === 'string') return text;
    return text[language] || text.en || '';
  };

  const renderBulletPoints = (points?: LocalisedString[]) => {
    if (!points || points.length === 0) return null;
    return (
      <ul className="space-y-3 mt-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-2 h-2 mt-2 bg-primary-500 rounded-full" />
            <span className="text-slate-700">{getText(point)}</span>
          </li>
        ))}
      </ul>
    );
  };

  const renderKeyTerms = (terms?: Array<{ term: LocalisedString; definition: LocalisedString }>) => {
    if (!terms || terms.length === 0) return null;
    return (
      <div className="mt-6 bg-slate-50 rounded-lg p-4">
        <h4 className="font-medium text-slate-800 mb-3">
          {language === 'nl' ? 'Belangrijke termen' : 'Key Terms'}
        </h4>
        <dl className="space-y-2">
          {terms.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:gap-2">
              <dt className="font-medium text-primary-700">{getText(item.term)}:</dt>
              <dd className="text-slate-600">{getText(item.definition)}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
  };

  const renderExample = (example?: { problem: LocalisedString; solution: LocalisedString[] }) => {
    if (!example) return null;
    return (
      <div className="mt-6 space-y-4">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h4 className="font-medium text-blue-800 mb-2">
            {language === 'nl' ? 'Opgave' : 'Problem'}
          </h4>
          <pre className="text-blue-700 whitespace-pre-wrap font-mono text-sm">
            {getText(example.problem)}
          </pre>
        </div>
        <div className="bg-green-50 rounded-lg p-4 border border-green-200">
          <h4 className="font-medium text-green-800 mb-3">
            {language === 'nl' ? 'Uitwerking' : 'Solution'}
          </h4>
          <ol className="space-y-2">
            {example.solution.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-200 text-green-700 rounded-full flex items-center justify-center text-sm font-medium">
                  {index + 1}
                </span>
                <span className="text-green-700">{getText(step)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  };

  const renderFormula = () => {
    if (!slide.formula) return null;
    return (
      <div className="my-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-700 font-mono tracking-wide">
            {slide.formula}
          </div>
          {slide.formulaExplanation && (
            <div className="mt-4 text-sm text-primary-600 whitespace-pre-line">
              {getText(slide.formulaExplanation)}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Slide type-specific styling
  const getSlideStyle = () => {
    switch (slide.type) {
      case 'title':
        return 'bg-gradient-to-br from-primary-500 to-primary-700 text-white';
      case 'formula':
        return 'bg-white';
      case 'example':
        return 'bg-white';
      case 'summary':
        return 'bg-gradient-to-br from-slate-50 to-slate-100';
      default:
        return 'bg-white';
    }
  };

  return (
    <div className={`min-h-[400px] rounded-2xl shadow-lg overflow-hidden ${getSlideStyle()}`}>
      {/* Progress indicator */}
      <div className="h-1 bg-slate-200">
        <div
          className="h-full bg-primary-500 transition-all duration-300"
          style={{ width: `${((slideNumber) / totalSlides) * 100}%` }}
        />
      </div>

      <div className="p-8">
        {/* Slide number */}
        <div className={`text-sm mb-4 ${slide.type === 'title' ? 'text-primary-200' : 'text-slate-400'}`}>
          {slideNumber} / {totalSlides}
        </div>

        {/* Title */}
        <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
          slide.type === 'title' ? 'text-white' : 'text-slate-800'
        }`}>
          {getText(slide.title)}
        </h2>

        {/* Content */}
        <p className={`text-lg leading-relaxed ${
          slide.type === 'title' ? 'text-primary-100' : 'text-slate-600'
        }`}>
          {getText(slide.content)}
        </p>

        {/* Formula (for formula slides) */}
        {slide.type === 'formula' && renderFormula()}

        {/* Bullet points */}
        {slide.type !== 'title' && renderBulletPoints(slide.bulletPoints)}

        {/* Key terms */}
        {renderKeyTerms(slide.keyTerms)}

        {/* Example */}
        {slide.type === 'example' && renderExample(slide.example)}

        {/* Image placeholder */}
        {slide.image && (
          <div className="mt-6 bg-slate-100 rounded-lg p-8 text-center text-slate-400">
            <div className="text-4xl mb-2">🖼️</div>
            <div className="text-sm">{slide.imageAlt ? getText(slide.imageAlt) : 'Diagram'}</div>
          </div>
        )}
      </div>
    </div>
  );
}
