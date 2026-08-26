import React from 'react';
import { motion } from 'framer-motion';
import { photos, handleImageError } from '../config/photos';
import { weddingData } from '../config/weddingData';
import './WelcomeSection.css';

export default function WelcomeSection() {
  return (
    <section id="welcome" className="welcome-section">
      <div className="section-container">
        {/* Ornate Photo Frame with Scale Reveal */}
        <motion.div
          className="welcome-photo-container"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="welcome-photo-wrapper">
            <img
              src={photos.welcome}
              alt="Keerthi & Poornima Welcome Portrait"
              className="welcome-photo"
              loading="lazy"
              onError={handleImageError}
            />
            <div className="photo-inner-border"></div>
          </div>
        </motion.div>

        {/* Text Card */}
        <motion.div
          className="welcome-text-card luxury-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="welcome-tag">WITH THE BLESSINGS OF OUR FAMILIES</span>

          <div className="gold-divider">
            <span className="gold-divider-symbol">❖</span>
          </div>

          <p className="welcome-message">
            We joyfully invite you to celebrate the beginning of a beautiful new chapter in the lives of
          </p>

          <h2 className="welcome-couple-names">
            {weddingData.groom.shortName} <span className="ampersand">&amp;</span> {weddingData.bride.shortName}
          </h2>

          <p className="welcome-blessing">
            Your presence and blessings will make this occasion even more special.
          </p>

          <div className="welcome-seal">
            <span className="seal-text">❀ 2026 ❀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
