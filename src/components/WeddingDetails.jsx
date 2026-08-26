import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Sparkles, Sun } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import './WeddingDetails.css';

export default function WeddingDetails() {
  return (
    <section id="wedding-details" className="wedding-details-section">
      <div className="section-container">
        <motion.div
          className="wedding-details-card luxury-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Header Flourish */}
          <div className="card-top-motif">
            <span className="motif-symbol">✦ ❖ ✦</span>
          </div>

          <h2 className="section-title">THE WEDDING</h2>
          <p className="section-subtitle">MUHURTHAM &amp; LAGNA</p>

          <div className="gold-divider">
            <span className="gold-divider-symbol">❀</span>
          </div>

          {/* Main Date Display */}
          <div className="details-date-block">
            <div className="date-icon-wrap">
              <Calendar size={22} color="var(--color-gold-dark)" />
            </div>
            <span className="date-day">{weddingData.wedding.day}</span>
            <span className="date-full">{weddingData.wedding.date}</span>
          </div>

          {/* Timing Grid */}
          <div className="details-grid">
            <div className="detail-item">
              <div className="detail-icon">
                <Clock size={20} />
              </div>
              <div className="detail-content">
                <span className="detail-label">MUHURTHAM</span>
                <span className="detail-value">{weddingData.wedding.muhurtham}</span>
                <span className="detail-subvalue">Auspicious Time</span>
              </div>
            </div>

            <div className="detail-separator-line"></div>

            <div className="detail-item">
              <div className="detail-icon">
                <Sun size={20} />
              </div>
              <div className="detail-content">
                <span className="detail-label">LAGNA</span>
                <span className="detail-value">{weddingData.wedding.lagna}</span>
                <span className="detail-subvalue">Auspicious Muhurtham</span>
              </div>
            </div>
          </div>

          {/* Bottom Ornament */}
          <div className="card-bottom-motif">
            <Sparkles size={16} color="var(--color-gold)" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
