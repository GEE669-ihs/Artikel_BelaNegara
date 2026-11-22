'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        );
      }
    };

    window.addEventListener('scroll', updateScrollCompletion);
    return () => window.removeEventListener('scroll', updateScrollCompletion);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-patriot-600 z-50 transition-all duration-150 ease-out"
      style={{ width: `${completion}%` }}
      role="progressbar"
      aria-valuenow={completion}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Kemajuan membaca artikel"
    />
  );
}
