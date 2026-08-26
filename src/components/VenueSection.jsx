import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation as NavIcon, ExternalLink } from 'lucide-react';
import { GOOGLE_MAPS_URL, venueDetails } from '../config/venue';
import './VenueSection.css';

export default function VenueSection() {
  const handleLocationClick = () => {
    if (GOOGLE_MAPS_URL && GOOGLE_MAPS_URL !== "PASTE_GOOGLE_MAPS_LINK_HERE") {
      window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
    } else {
      // Fallback search link for Kanaka Bhavana Hosakote
      const searchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${venueDetails.name}, ${venueDetails.road}, ${venueDetails.town}, ${venueDetails.district}`
      )}`;
      window.open(searchUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="venue" className="venue-section">
      <div className="section-container">
        <motion.div
          className="venue-card luxury-card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="venue-pin-badge">
            <MapPin size={24} className="animate-pulse-glow" color="var(--color-burgundy)" />
          </div>

          <span className="venue-tag">WEDDING VENUE</span>
          <h2 className="venue-name">{venueDetails.name.toUpperCase()}</h2>

          <div className="gold-divider">
            <span className="gold-divider-symbol">❖</span>
          </div>

          <address className="venue-address">
            <p className="address-line road">{venueDetails.road}</p>
            <p className="address-line town">{venueDetails.town}</p>
            <p className="address-line district">{venueDetails.district}</p>
          </address>

          <motion.button
            className="view-location-btn"
            onClick={handleLocationClick}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label="View location on Google Maps"
          >
            <NavIcon size={18} />
            <span>VIEW LOCATION</span>
            <ExternalLink size={16} />
          </motion.button>

          <p className="maps-hint">Opens in Google Maps for directions</p>
        </motion.div>
      </div>
    </section>
  );
}
