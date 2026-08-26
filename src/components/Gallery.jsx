import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';
import { galleryList } from '../config/photos';
import Lightbox from './Lightbox';
import './Gallery.css';

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryList.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="section-container">
        <div className="section-header">
          <div className="gallery-icon-wrap">
            <Camera size={22} color="var(--color-gold-dark)" />
          </div>
          <span className="section-tag">PRE-WEDDING MOMENTS</span>
          <h2 className="section-title">Our Story In Frames</h2>
          <div className="gold-divider">
            <span className="gold-divider-symbol">❀</span>
          </div>
        </div>

        {/* Editorial Masonry Grid */}
        <div className="editorial-gallery-grid">
          {/* Card 1: Featured Top Image */}
          <motion.div
            className="gallery-item featured-top"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            onClick={() => handleImageClick(0)}
          >
            <div className="gallery-img-wrapper">
              <img
                src={galleryList[0].src}
                alt={galleryList[0].alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-hover-overlay">
                <Maximize2 size={24} color="#FFFFFF" />
                <span>View Moment</span>
              </div>
            </div>
          </motion.div>

          {/* Row of 2 Offset Images */}
          <div className="gallery-middle-row">
            <motion.div
              className="gallery-item middle-left"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              onClick={() => handleImageClick(1)}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={galleryList[1].src}
                  alt={galleryList[1].alt}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <Maximize2 size={20} color="#FFFFFF" />
                </div>
              </div>
            </motion.div>

            <motion.div
              className="gallery-item middle-right"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              onClick={() => handleImageClick(2)}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={galleryList[2].src}
                  alt={galleryList[2].alt}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-hover-overlay">
                  <Maximize2 size={20} color="#FFFFFF" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Card 4: Wide Bottom Image */}
          <motion.div
            className="gallery-item featured-bottom"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.3 }}
            onClick={() => handleImageClick(3)}
          >
            <div className="gallery-img-wrapper">
              <img
                src={galleryList[3].src}
                alt={galleryList[3].alt}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-hover-overlay">
                <Maximize2 size={24} color="#FFFFFF" />
                <span>View Moment</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lightbox Viewer */}
        <Lightbox
          isOpen={lightboxOpen}
          images={galleryList}
          currentIndex={currentIndex}
          onClose={() => setLightboxOpen(false)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      </div>
    </section>
  );
}
