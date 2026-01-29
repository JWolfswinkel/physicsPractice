import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Physics Practice - VWO 3 & 4',
  description: 'Practice physics at VWO-3 and VWO-4 level with step-by-step explanations',
  keywords: ['physics', 'VWO', 'VWO-3', 'VWO-4', 'practice', 'natuurkunde', 'oefenen'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <div className="max-w-5xl mx-auto px-4 py-6">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
