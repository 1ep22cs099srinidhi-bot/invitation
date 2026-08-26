import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';
import { photos, handleImageError } from '../config/photos';
import { weddingData } from '../config/weddingData';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const heartVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, type: "spring", stiffness: 200 }
    }
  };

  return (
    <section id="hero" className="hero-section full-height-section">
      {/* Background Image with Ken Burns Zoom & Overlay */}
      <div className="hero-bg-container">
        <img
          src={photos.hero}
          alt="Keerthi & Poornima Wedding Background"
          className="hero-bg-image animate-ken-burns"
          onError={handleImageError}
        />
        <div className="hero-overlay"></div>
        <div className="hero-vignette"></div>
      </div>

      {/* Decorative Ornate Corner Accents */}
      <div className="corner-ornament top-left"></div>
      <div className="corner-ornament top-right"></div>
      <div className="corner-ornament bottom-left"></div>
      <div className="corner-ornament bottom-right"></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Together with their families
        </motion.p>

        <motion.div className="hero-names-container" variants={itemVariants}>
          <h1 className="hero-name groom-name">{weddingData.groom.fullName}</h1>

          <motion.div className="hero-heart-wrapper" variants={heartVariants}>
            <Heart className="hero-heart-icon animate-pulse-glow" fill="var(--color-gold-bright)" color="var(--color-gold-bright)" size={28} />
          </motion.div>

          <h1 className="hero-name bride-name">{weddingData.bride.fullName}</h1>
        </motion.div>

        <motion.p className="hero-invitation-text" variants={itemVariants}>
          are getting married
        </motion.p>

        <motion.div className="hero-date-badge" variants={itemVariants}>
          <span className="hero-date-line"></span>
          <span className="hero-date-text">{weddingData.wedding.date.toUpperCase()}</span>
          <span className="hero-date-line"></span>
        </motion.div>

        <motion.div className="hero-scroll-indicator" variants={itemVariants}>
          <span className="scroll-text">Scroll to begin</span>
          <ChevronDown className="scroll-arrow animate-bounce-slow" size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
