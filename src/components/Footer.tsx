'use client';

import { useLanguage } from '@/lib/i18n';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-slate-200 py-4">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-slate-500">
        {t('footer.title')}
        <span className="mx-2">•</span>
        <span className="text-xs">
          {t('footer.dutch')}
        </span>
      </div>
    </footer>
  );
}
