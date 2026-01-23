'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="font-semibold text-lg text-slate-800">
            {t('home.title')}
          </span>
          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full">
            VWO 3
          </span>
        </Link>

        <div className="flex items-center gap-4">
          <nav className="flex items-center gap-4">
            <Link
              href="/topics"
              className="text-sm text-slate-600 hover:text-primary-600 transition-colors"
            >
              {t('nav.practice')}
            </Link>
            <Link
              href="/dashboard"
              className="text-sm text-slate-600 hover:text-primary-600 transition-colors"
            >
              {t('nav.progress')}
            </Link>
            <Link
              href="/admin"
              className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              {t('nav.admin')}
            </Link>
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
