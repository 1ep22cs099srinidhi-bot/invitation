import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingData } from '../config/weddingData';
import './Countdown.css';

export default function Countdown() {
  const targetDate = new Date(weddingData.wedding.targetTimestamp).getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = calculateTimeLeft();
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleCelebrateClick = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#C5A059', '#6B1D2F', '#FAF6EE']
    });
  };

  const formatNumber = (num) => String(num).padStart(2, '0');

  return (
    <section id="countdown" className="countdown-section">
      <div className="section-container">
        <motion.div
          className="countdown-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="countdown-tag">COUNTING DOWN TO OUR SPECIAL DAY</span>

          <div className="gold-divider">
            <span className="gold-divider-symbol">♥</span>
          </div>

          {timeLeft.isCompleted ? (
            <motion.div
              className="completed-banner"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <h2>THE DAY HAS ARRIVED!</h2>
              <p>Join us in celebration &amp; blessings</p>
            </motion.div>
          ) : (
            <div className="countdown-timer-grid">
              <div className="timer-unit">
                <div className="number-box">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={timeLeft.days}
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 12, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="timer-number"
                    >
                      {formatNumber(timeLeft.days)}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="timer-label">DAYS</span>
              </div>

              <span className="colon-separator">:</span>

              <div className="timer-unit">
                <div className="number-box">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={timeLeft.hours}
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 12, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="timer-number"
                    >
                      {formatNumber(timeLeft.hours)}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="timer-label">HOURS</span>
              </div>

              <span className="colon-separator">:</span>

              <div className="timer-unit">
                <div className="number-box">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={timeLeft.minutes}
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 12, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="timer-number"
                    >
                      {formatNumber(timeLeft.minutes)}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="timer-label">MINUTES</span>
              </div>

              <span className="colon-separator">:</span>

              <div className="timer-unit">
                <div className="number-box">
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={timeLeft.seconds}
                      initial={{ y: -12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 12, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="timer-number"
                    >
                      {formatNumber(timeLeft.seconds)}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <span className="timer-label">SECONDS</span>
              </div>
            </div>
          )}

          <button
            className="celebrate-btn"
            onClick={handleCelebrateClick}
            aria-label="Send blessings confetti"
          >
            <span>✨ Tap to Bless &amp; Celebrate</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
