import React, { useMemo } from 'react';
import './FloatingPetals.css';

export default function FloatingPetals() {
  // Generate 8 subtle decorative floating elements
  const particles = useMemo(() => {
    const items = ['🌸', '✨', '💖', '🌺', '✨', '🌸', '💖', '✨'];
    return items.map((char, index) => ({
      id: index,
      char,
      left: `${(index * 12 + 6) % 92}%`,
      duration: `${14 + (index % 5) * 3}s`,
      delay: `${(index % 4) * 2.5}s`,
      size: `${14 + (index % 3) * 4}px`
    }));
  }, []);

  return (
    <div className="floating-petals-container" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-particle"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            fontSize: p.size
          }}
        >
          {p.char}
        </span>
      ))}
    </div>
  );
}
