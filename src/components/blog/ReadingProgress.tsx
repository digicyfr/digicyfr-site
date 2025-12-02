'use client';

import { useState, useEffect } from 'react';
import '@/styles/components/blog/reading-progress.css';

/**
 * Reading Progress Indicator
 *
 * Shows a fixed progress bar at the top of the page
 * that fills as the user scrolls through the blog post content.
 *
 * Phase 4: Enhancement Components
 */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Calculate progress percentage
      const totalScroll = documentHeight - windowHeight;
      const currentProgress = (scrollTop / totalScroll) * 100;

      setProgress(Math.min(Math.max(currentProgress, 0), 100));
    };

    // Calculate on mount
    calculateProgress();

    // Add scroll listener
    window.addEventListener('scroll', calculateProgress, { passive: true });

    // Cleanup
    return () => window.removeEventListener('scroll', calculateProgress);
  }, []);

  return (
    <div className="reading-progress" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="reading-progress-bar"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}