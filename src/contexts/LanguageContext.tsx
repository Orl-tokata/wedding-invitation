'use client';

import { createContext, useContext, useState, useCallback } from 'react';

import { en } from '@/i18n/en';
import { kh } from '@/i18n/kh';
import { ko } from '@/i18n/ko';
import { Locale } from '@/types/i18n';


const translations = { en, kh, ko } as const;

type LanguageContextValue = {
  locale: Locale;
  t: typeof en;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'wedding-locale';

function getSavedLocale(): Locale {
  if (typeof window === 'undefined') return 'kh';
  const saved = localStorage.getItem(STORAGE_KEY);
  return (saved === 'en' || saved === 'kh' || saved === 'ko') ? saved : 'kh';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getSavedLocale);
  const t = translations[locale];

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      <div className={`locale-${locale}`} suppressHydrationWarning>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider');
  return ctx;
}