import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
          {/* Close Button */}
          <button className="lightbox-close-btn" onClick={onClose} aria-label="Close photo modal">
            <X size={26} color="#FFFFFF" />
          </button>

          {/* Image Display */}
          <div className="lightbox-media-wrapper">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage.src}
                src={currentImage.src}
                alt={currentImage.alt}
                className="lightbox-image"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Caption & Counter */}
          <div className="lightbox-footer">
            <p className="lightbox-caption">{currentImage.caption}</p>
            <span className="lightbox-counter">
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          {/* Navigation Controls */}
          <button className="lightbox-nav-btn prev" onClick={onPrev} aria-label="Previous photo">
            <ChevronLeft size={30} color="#FFFFFF" />
          </button>

          <button className="lightbox-nav-btn next" onClick={onNext} aria-label="Next photo">
            <ChevronRight size={30} color="#FFFFFF" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
