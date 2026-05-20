import React from 'react';
import './Hero.css';

const Hero = ({ onOpenModal }) => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1>Define Your Gaze. <br/><span className="text-accent">Own The Future.</span></h1>
          <p>Experience the next generation of eyelash extensions. Stand out with bold, flawless, and authentic designs tailored to your unique eye shape.</p>
          <div className="hero-buttons">
            <button onClick={onOpenModal} className="btn btn-primary">Book Your Session</button>
            <a href="#services" className="btn btn-outline">Explore Styles</a>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <img src="/hero.png" alt="Futuristic Eyelashes" className="hero-image" />
          <div className="hero-glow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
