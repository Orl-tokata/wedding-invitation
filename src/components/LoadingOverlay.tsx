'use client';

import { useEffect, useState } from 'react';

type Props = {
  onBack: () => void;
};

export default function LoadingOverlay({ onBack }: Props) {
  const setShowArrow:any = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowArrow(true);
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center sm:w-full sm:h-full xs:w-full xs:h-full">
      <img
        src="/images/tokata-phanou.JPG"
        alt="Tokata"
        //className="absolute inset-0 object-cover w-full h-full"
        />
    </div>
  );
}
