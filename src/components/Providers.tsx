'use client';

import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <div
        className="fixed z-[200] flex justify-end p-2 min-h-[3.5rem] items-start pointer-events-none"
        style={{
          top: 0,
          right: 0,
          left: 'auto',
        }}>
        <div className="pointer-events-auto">
          <LanguageSwitcher />
        </div>
      </div>
      {children}
    </LanguageProvider>
  );
}