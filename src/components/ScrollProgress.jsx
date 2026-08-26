import React, { useState, useEffect } from 'react';
import './ScrollProgress.css';

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScrollable = docHeight - windowHeight;

      if (totalScrollable > 0) {
        const progress = (scrollTop / totalScrollable) * 100;
        setScrollPercentage(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar-container">
      <div
        className="scroll-progress-bar-fill"
        style={{ width: `${scrollPercentage}%` }}
      />
    </div>
  );
}
