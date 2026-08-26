import React from 'react';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import WeddingDetails from './components/WeddingDetails';
import Countdown from './components/Countdown';
import ReceptionSection from './components/ReceptionSection';
import VenueSection from './components/VenueSection';
import CoupleSection from './components/CoupleSection';
import FamilySection from './components/FamilySection';
import Gallery from './components/Gallery';
import FinalSection from './components/FinalSection';
import FloatingPetals from './components/FloatingPetals';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';

export default function App() {
  return (
    <div className="wedding-invitation-app">
      <ScrollProgress />
      <FloatingPetals />

      <main className="main-content-flow">
        <Hero />
        <WelcomeSection />
        <WeddingDetails />
        <Countdown />
        <ReceptionSection />
        <VenueSection />
        <CoupleSection />
        <FamilySection />
        <Gallery />
        <FinalSection />
      </main>

      <Navigation />
    </div>
  );
}
