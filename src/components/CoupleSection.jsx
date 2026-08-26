import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { photos, handleImageError } from '../config/photos';
import { weddingData } from '../config/weddingData';
import './CoupleSection.css';

export default function CoupleSection() {
  return (
    <section id="couple" className="couple-section">
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">THE COUPLE</span>
          <h2 className="section-main-title">Groom &amp; Bride</h2>
          <div className="gold-divider">
            <span className="gold-divider-symbol">❀</span>
          </div>
        </div>

        <div className="couple-grid">
          {/* Groom Card */}
          <motion.div
            className="couple-card groom-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="couple-role">THE GROOM</span>
            <div className="portrait-wrapper">
              <img
                src={photos.groom}
                alt={`Groom ${weddingData.groom.fullName}`}
                className="portrait-img"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="portrait-frame-glow"></div>
            </div>
            <h3 className="couple-formal-name">{weddingData.groom.formalTitle}</h3>
            <p className="couple-parents">{weddingData.groom.parents}</p>
            <p className="couple-residence">{weddingData.groom.residence}</p>
          </motion.div>

          {/* Central Heart Separator */}
          <div className="couple-heart-divider">
            <div className="heart-line"></div>
            <motion.div
              className="pulse-heart-icon-wrap"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            >
              <Heart fill="var(--color-burgundy)" color="var(--color-gold)" size={32} />
            </motion.div>
            <div className="heart-line"></div>
          </div>

          {/* Bride Card */}
          <motion.div
            className="couple-card bride-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="couple-role">THE BRIDE</span>
            <div className="portrait-wrapper">
              <img
                src={photos.bride}
                alt={`Bride ${weddingData.bride.fullName}`}
                className="portrait-img"
                loading="lazy"
                onError={handleImageError}
              />
              <div className="portrait-frame-glow"></div>
            </div>
            <h3 className="couple-formal-name">{weddingData.bride.formalTitle}</h3>
            <p className="couple-parents">{weddingData.bride.parentLineage}</p>
            <p className="couple-residence">{weddingData.bride.residence}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
