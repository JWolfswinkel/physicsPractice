'use client';

import { useState, useEffect } from 'react';
import { Question, GradingResult, LocalisedString } from '@/lib/types';
import { gradeAnswer, getDifficultyLabel } from '@/lib/grading';
import { useLanguage } from '@/lib/i18n';
import MCQQuestion from './MCQQuestion';
import NumericQuestion from './NumericQuestion';
import HintSystem from './HintSystem';
import SolutionView from './SolutionView';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (result: GradingResult, timeSpent: number, hintsUsed: number) => void;
  onNext: () => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
}: QuestionCardProps) {
  const { t, getText, language } = useLanguage();
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState<number>(-1);
  const [selectedUnit, setSelectedUnit] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);
  const [gradingResult, setGradingResult] = useState<GradingResult | null>(null);
  const [hintsRevealed, setHintsRevealed] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [startTime] = useState(Date.now());

  // Helper to get localised text from question fields
  const getLocalisedText = (text: LocalisedString): string => {
    if (typeof text === 'string') return text;
    return text[language] || text.en || '';
  };

  // Helper to get English text (for grading MCQ)
  const getEnglishText = (text: LocalisedString): string => {
    if (typeof text === 'string') return text;
    return text.en || '';
  };

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer('');
    setSelectedChoiceIndex(-1);
    setSelectedUnit('');
    setSubmitted(false);
    setGradingResult(null);
    setHintsRevealed(0);
    setShowSolution(false);
  }, [question.id]);

  const handleSubmit = () => {
    if (!selectedAnswer && selectedChoiceIndex === -1) return;
    if (question.unitOptions && !selectedUnit) return;

    // For MCQ, use the English version of the selected choice for grading
    let answerForGrading = selectedAnswer;
    if (question.answerType === 'mcq' && question.choices && selectedChoiceIndex >= 0) {
      answerForGrading = getEnglishText(question.choices[selectedChoiceIndex]);
    }

    const result = gradeAnswer(question, answerForGrading, selectedUnit, language);
    setGradingResult(result);
    setSubmitted(true);

    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    onAnswer(result, timeSpent, hintsRevealed);
  };

  const handleRevealHint = () => {
    if (hintsRevealed < question.hints.length) {
      setHintsRevealed(hintsRevealed + 1);
    }
  };

  const handleShowSolution = () => {
    setShowSolution(true);
    setHintsRevealed(question.hints.length);
  };

  const canSubmit = (selectedAnswer || selectedChoiceIndex >= 0) && (!question.unitOptions || selectedUnit);

  // Get localised choices for MCQ
  const getLocalisedChoices = (): string[] => {
    if (!question.choices) return [];
    return question.choices.map(choice => getLocalisedText(choice));
  };

  // Handle MCQ selection by index
  const handleMCQSelect = (choice: string) => {
    const choices = getLocalisedChoices();
    const index = choices.indexOf(choice);
    setSelectedChoiceIndex(index);
    setSelectedAnswer(choice); // Keep for display purposes
  };

  // Get difficulty label
  const difficultyLabel = getDifficultyLabel(question.difficulty, language);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-slate-600">
            {t('question.question')} {questionNumber} {t('question.of')} {totalQuestions}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              question.difficulty === 1
                ? 'bg-green-100 text-green-700'
                : question.difficulty === 2
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}
          >
            {difficultyLabel}
          </span>
        </div>
        <span className="text-xs text-slate-400">
          {question.answerType === 'mcq' ? t('question.multipleChoice') : t('question.numeric')}
        </span>
      </div>

      {/* Question */}
      <div className="p-6">
        <p className="text-lg text-slate-800 leading-relaxed mb-6">
          {getLocalisedText(question.prompt)}
        </p>

        {/* Answer Input */}
        {!submitted && (
          <div className="space-y-4">
            {question.answerType === 'mcq' ? (
              <MCQQuestion
                choices={getLocalisedChoices()}
                selectedAnswer={selectedAnswer}
                onSelect={handleMCQSelect}
                disabled={submitted}
              />
            ) : (
              <NumericQuestion
                value={selectedAnswer}
                onChange={setSelectedAnswer}
                unitOptions={question.unitOptions}
                selectedUnit={selectedUnit}
                onUnitChange={setSelectedUnit}
                disabled={submitted}
              />
            )}

            {/* Hints */}
            <HintSystem
              hints={question.hints.map(h => getLocalisedText(h))}
              hintsRevealed={hintsRevealed}
              onRevealHint={handleRevealHint}
            />

            {/* Submit Button */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleSubmit}
                disabled={!canSubmit}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all btn-press ${
                  canSubmit
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {t('question.checkAnswer')}
              </button>
            </div>
          </div>
        )}

        {/* Result */}
        {submitted && gradingResult && (
          <div className="space-y-4 animate-slide-up">
            <div
              className={`p-4 rounded-lg ${
                gradingResult.correct
                  ? 'bg-success-50 border border-success-200'
                  : 'bg-error-50 border border-error-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-2xl">
                  {gradingResult.correct ? '✓' : '✗'}
                </span>
                <span
                  className={`font-medium ${
                    gradingResult.correct ? 'text-success-700' : 'text-error-700'
                  }`}
                >
                  {gradingResult.feedback}
                </span>
              </div>
            </div>

            <div className="text-sm text-slate-600">
              <span className="font-medium">{t('question.yourAnswer')}: </span>
              {selectedAnswer}
              {selectedUnit && ` ${selectedUnit}`}
            </div>

            {!showSolution ? (
              <button
                onClick={handleShowSolution}
                className="text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                {t('question.showSolution')} →
              </button>
            ) : (
              <SolutionView
                solutionSteps={question.solutionSteps.map(s => getLocalisedText(s))}
                commonMistakes={question.commonMistakes.map(m => getLocalisedText(m))}
                correctAnswer={question.correctAnswer}
                correctUnit={question.correctUnit}
              />
            )}

            <button
              onClick={onNext}
              className="w-full py-3 px-6 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors btn-press"
            >
              {questionNumber < totalQuestions ? t('question.nextQuestion') : t('question.seeResults')}
            </button>
          </div>
        )}
      </div>

      {/* Dutch Keywords */}
      {question.dutchKeywords && question.dutchKeywords.length > 0 && (
        <div className="px-6 pb-4">
          <div className="text-xs text-slate-400">
            {t('question.dutch')}: {question.dutchKeywords.join(', ')}
          </div>
        </div>
      )}
    </div>
  );
}
