import React from 'react';
import { motion } from 'framer-motion';
import { weddingData } from '../config/weddingData';
import './FamilySection.css';

export default function FamilySection() {
  return (
    <section id="family" className="family-section">
      <div className="section-container">
        <motion.div
          className="family-card luxury-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="family-tag">WITH THE BLESSINGS OF</span>

          <div className="gold-divider">
            <span className="gold-divider-symbol">❖</span>
          </div>

          <div className="family-names-block">
            <div className="family-group">
              <span className="family-role">GROOM'S PARENTS</span>
              <h3 className="family-head-names">{weddingData.groom.parents}</h3>
              <p className="family-address">{weddingData.groom.residence}</p>
            </div>

            <div className="family-connector">
              <span className="connector-word">and</span>
            </div>

            <div className="family-group">
              <span className="family-role">BRIDE'S PARENTS</span>
              <h3 className="family-head-names">{weddingData.bride.parents}</h3>
              <p className="family-address">{weddingData.bride.residence}</p>
            </div>
          </div>

          <div className="gold-divider">
            <span className="gold-divider-symbol">❀</span>
          </div>

          <p className="family-closing-invitation">
            We invite you to celebrate with {weddingData.groom.shortName} &amp; {weddingData.bride.shortName}.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
