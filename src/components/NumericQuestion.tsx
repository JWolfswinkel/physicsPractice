'use client';

import { useLanguage } from '@/lib/i18n';

interface NumericQuestionProps {
  value: string;
  onChange: (value: string) => void;
  unitOptions?: string[];
  selectedUnit: string;
  onUnitChange: (unit: string) => void;
  disabled: boolean;
}

export default function NumericQuestion({
  value,
  onChange,
  unitOptions,
  selectedUnit,
  onUnitChange,
  disabled,
}: NumericQuestionProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
          placeholder={t('numeric.enterAnswer')}
          className={`flex-1 px-4 py-3 border-2 rounded-lg text-lg transition-colors ${
            disabled
              ? 'bg-slate-50 border-slate-200 cursor-not-allowed'
              : 'border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
          }`}
        />

        {unitOptions && unitOptions.length > 0 && (
          <select
            value={selectedUnit}
            onChange={(e) => onUnitChange(e.target.value)}
            disabled={disabled}
            className={`px-4 py-3 border-2 rounded-lg text-lg transition-colors min-w-[100px] ${
              disabled
                ? 'bg-slate-50 border-slate-200 cursor-not-allowed'
                : 'border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
            }`}
          >
            <option value="">{t('numeric.unit')}</option>
            {unitOptions.map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        )}
      </div>

      <p className="text-sm text-slate-500">
        {t('numeric.helper')}
        {unitOptions && <span> • {t('numeric.selectUnit')}</span>}
      </p>
    </div>
  );
}
