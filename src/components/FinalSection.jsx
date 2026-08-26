import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, PhoneCall } from 'lucide-react';
import { photos, handleImageError } from '../config/photos';
import { weddingData } from '../config/weddingData';
import './FinalSection.css';

export default function FinalSection() {
  return (
    <section id="final" className="final-section full-height-section">
      <div className="final-bg-container">
        <img
          src={photos.final}
          alt="Keerthi & Poornima Wedding Final Frame"
          className="final-bg-image animate-ken-burns"
          onError={handleImageError}
        />
        <div className="final-overlay"></div>
      </div>

      <motion.div
        className="final-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="final-heart-icon-wrap">
          <Heart fill="var(--color-gold-bright)" color="var(--color-gold-bright)" size={32} className="animate-pulse-glow" />
        </div>

        <h1 className="final-couple-names">
          {weddingData.groom.shortName} <span className="ampersand">&amp;</span> {weddingData.bride.shortName}
        </h1>

        <h2 className="final-heading">Hearty Welcome to You All</h2>

        <div className="gold-divider">
          <span className="gold-divider-symbol">❖</span>
        </div>

        <p className="final-message">
          Your presence, love and blessings will make our celebration complete.
        </p>

        <div className="final-date-badge">
          <span>{weddingData.wedding.formattedDate}</span>
        </div>

        {/* Contact Phone Numbers */}
        <div className="final-contacts-box">
          <span className="contacts-header-tag">FOR INFORMATION &amp; DETAILS</span>
          <div className="contacts-buttons-row">
            {weddingData.contacts.map((c, idx) => (
              <a
                key={idx}
                href={`tel:${c.phone}`}
                className="contact-phone-btn"
                aria-label={`Call ${c.formatted}`}
              >
                <PhoneCall size={15} />
                <span>{c.phone}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="final-sparkle-footer">
          <Sparkles size={16} color="var(--color-gold-bright)" />
          <span>KANAKA BHAVANA • HOSAKOTE</span>
          <Sparkles size={16} color="var(--color-gold-bright)" />
        </div>
      </motion.div>
    </section>
  );
}
