
'use client';

import { LandingPage } from "@/components/LandingPage";
import LoadingOverlay from "@/components/LoadingOverlay";
import { useState, useEffect } from "react";

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [showRadio, setShowRadio] = useState(false);

  useEffect(() => {
    if (showOverlay) {
      const timeout = setTimeout(() => {
        setShowOverlay(false);
        setShowRadio(true);
      }, 60000);
      return () => clearTimeout(timeout);
    }
  }, [showOverlay]);

  return (
    <main>
      {/* 1. Show Landing Page initially */}
      {!showOverlay && !showRadio && (
        <LandingPage onLogin={() => setShowOverlay(true)} />
      )}

      {/* 2. Show Overlay while loading */}
      {showOverlay && (
        <LoadingOverlay onBack={() => setShowOverlay(false)} />
      )}
    </main>
  );
}
