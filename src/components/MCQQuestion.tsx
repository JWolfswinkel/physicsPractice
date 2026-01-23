'use client';

interface MCQQuestionProps {
  choices: string[];
  selectedAnswer: string;
  onSelect: (answer: string) => void;
  disabled: boolean;
}

export default function MCQQuestion({
  choices,
  selectedAnswer,
  onSelect,
  disabled,
}: MCQQuestionProps) {
  return (
    <div className="space-y-2">
      {choices.map((choice, index) => {
        const letter = String.fromCharCode(65 + index); // A, B, C, D
        const isSelected = selectedAnswer === choice;

        return (
          <button
            key={index}
            onClick={() => !disabled && onSelect(choice)}
            disabled={disabled}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              isSelected
                ? 'border-primary-500 bg-primary-50'
                : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
            } ${disabled ? 'opacity-75 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <div className="flex items-start gap-3">
              <span
                className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-medium ${
                  isSelected
                    ? 'bg-primary-500 text-white'
                    : 'bg-slate-200 text-slate-600'
                }`}
              >
                {letter}
              </span>
              <span className="text-slate-700">{choice}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
