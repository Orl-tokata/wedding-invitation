'use client';

import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div className="fixed top-4 right-4 z-[200] max-w-[500px] left-[50%] translate-x-[-50%] sm:left-auto sm:translate-x-0 flex justify-end px-2">
        <LanguageSwitcher />
      </div>
      {children}
    </LanguageProvider>
  );
}