'use client';

import { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { IoCloseOutline } from 'react-icons/io5';
import { useTranslation } from '@/contexts/LanguageContext';

const DISMISS_KEY = 'wedding-pwa-install-dismissed';

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

function isStandalone() {
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as unknown as { standalone?: boolean }).standalone === true
  );
}

function isIos() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

export function InstallPrompt() {
  const { t } = useTranslation();
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showIosHint, setShowIosHint] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY) === '1') return;
    if (isStandalone()) return;

    if (isIos()) {
      setShowIosHint(true);
      setVisible(true);
      return;
    }

    const handler = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
      setVisible(true);
    };
    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, '1');
    setVisible(false);
  };

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-[70] w-[92%] max-w-[460px]">
      <div
        className="flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-sm p-3 shadow-lg animate-fadeIn"
        style={{ border: '1px solid #918645' }}
      >
        <div className="flex-1">
          <p className="text-sm font-semibold" style={{ color: '#918645' }}>
            {t.installAppTitle}
          </p>
          <p className="text-xs text-neutral-600 mt-0.5">
            {showIosHint ? t.installAppIosHint : t.installAppDesc}
          </p>
        </div>

        {!showIosHint && (
          <button
            type="button"
            onClick={handleInstall}
            className="btn-scale flex items-center gap-1 rounded-full px-3 py-2 text-xs font-medium text-white whitespace-nowrap"
            style={{ backgroundColor: '#918645' }}
          >
            <FaDownload className="text-xs" />
            {t.installAppButton}
          </button>
        )}

        <button
          type="button"
          onClick={dismiss}
          aria-label={t.closeModal}
          className="text-neutral-400 hover:text-neutral-600 transition-colors"
        >
          <IoCloseOutline className="text-xl" />
        </button>
      </div>
    </div>
  );
}
