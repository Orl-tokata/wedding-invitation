'use client';

import { createContext, useContext, useState, useCallback } from 'react';

import { en } from '@/i18n/en';
import { kh } from '@/i18n/kh';
import { Locale } from '@/types/i18n';


const translations = { en, kh } as const;

type LanguageContextValue = {
  locale: Locale;
  t: typeof en;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('kh');
  const t = translations[locale];

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider');
  return ctx;
}