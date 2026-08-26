import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Moon, Clock } from 'lucide-react';
import { photos } from '../config/photos';
import { weddingData } from '../config/weddingData';
import './ReceptionSection.css';

export default function ReceptionSection() {
  return (
    <section id="reception" className="reception-section">
      <div className="reception-bg-container">
        <img
          src={photos.venue}
          alt="Reception Venue Backdrop"
          className="reception-bg-image"
          loading="lazy"
        />
        <div className="reception-overlay"></div>
      </div>

      <div className="section-container">
        <motion.div
          className="reception-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="reception-badge">
            <Moon size={18} color="var(--color-gold-bright)" />
            <span>EVENING CELEBRATION</span>
          </div>

          <h2 className="reception-title">RECEPTION</h2>

          <div className="gold-divider">
            <span className="gold-divider-symbol">✦</span>
          </div>

          <div className="reception-date-box">
            <span className="reception-day">{weddingData.reception.day}</span>
            <span className="reception-date">{weddingData.reception.date}</span>
          </div>

          <div className="reception-time-box">
            <Clock size={18} color="var(--color-gold-bright)" />
            <span className="reception-time">{weddingData.reception.time}</span>
          </div>

          <p className="reception-note">
            Join us for an evening of music, feast, and celebration as we usher in our joyous occasion.
          </p>

          <div className="reception-sparkle">
            <Sparkles size={16} color="var(--color-gold-bright)" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
