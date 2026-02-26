'use client';

import { useTranslation } from "@/contexts/LanguageContext";
import { IoLanguage } from "react-icons/io5";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="flex items-center gap-1.5 rounded-lg border border-[#8e7e78] bg-white/90 shadow-sm p-1 text-sm backdrop-blur-sm">
      <IoLanguage className="text-[#8e7e78] text-lg shrink-0" aria-hidden />
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded px-2.5 py-1 font-medium transition ${locale === 'en' ? 'bg-[#8e7e78] text-white' : 'text-[#8e7e78] hover:bg-[#8e7e78]/10'}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale('kh')}
        className={`rounded px-2.5 py-1 font-medium transition ${locale === 'kh' ? 'bg-[#8e7e78] text-white' : 'text-[#8e7e78] hover:bg-[#8e7e78]/10'}`}
      >
        KH
      </button>
    </div>
  );
}