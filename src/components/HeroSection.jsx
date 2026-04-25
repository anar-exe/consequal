import React from 'react';
import { siteConfig } from '../data/content';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="glow-orb primary"></div>
        <div className="glow-orb secondary"></div>
      </div>
      
      <div className="container hero-content">
        <div className="hero-text animate-fade-in">
          <h5>NEW SOUND, NEW VISION</h5>
          <h1 className="hero-title" style={{ whiteSpace: 'pre-line' }}>
            {siteConfig.heroTitle}
          </h1>
          <p className="hero-subtitle">
            {siteConfig.heroSubtitle}
          </p>
          <div className="hero-actions">
            <a href="#albums" className="btn btn-primary">Explore Albums</a>
            <a href="#demos" className="btn btn-outline">Listen to Demos</a>
          </div>
        </div>
        
        {/* Placeholder for dynamic visual or artist image */}
        <div className="hero-visual glass-panel animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="visual-inner">
            <div className="soundwave">
              <span></span><span></span><span></span><span></span><span></span>
              <span></span><span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
