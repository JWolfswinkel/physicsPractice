'use client';

import { useLanguage, Language } from '@/lib/i18n';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const handleToggle = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-1">
      <button
        onClick={() => handleToggle('en')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          language === 'en'
            ? 'bg-white text-primary-700 shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => handleToggle('nl')}
        className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
          language === 'nl'
            ? 'bg-white text-primary-700 shadow-sm'
            : 'text-slate-500 hover:text-slate-700'
        }`}
        aria-label="Switch to Dutch"
      >
        NL
      </button>
    </div>
  );
}
