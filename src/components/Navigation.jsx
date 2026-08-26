import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Image as ImageIcon, Users } from 'lucide-react';
import './Navigation.css';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home', icon: Heart },
    { id: 'wedding-details', label: 'Details', icon: Calendar },
    { id: 'venue', label: 'Venue', icon: MapPin },
    { id: 'couple', label: 'Couple', icon: Users },
    { id: 'gallery', label: 'Moments', icon: ImageIcon }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="floating-nav-container" aria-label="Quick Navigation">
      <div className="floating-nav-pill">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              className={`nav-item-btn ${isActive ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
              aria-label={`Scroll to ${item.label}`}
            >
              <Icon size={18} />
              <span className="nav-item-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
