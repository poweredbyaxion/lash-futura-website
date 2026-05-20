import React, { useEffect, useState } from 'react';
import './AnimatedEye.css';

const AnimatedEye = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation shortly after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`animated-eye-container ${isLoaded ? 'loaded' : ''}`}>
      <svg viewBox="0 0 200 120" className="eye-svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* A soft pink glow for the iris */}
          <radialGradient id="irisGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-color)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--accent-color)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* The Iris and Pupil */}
        <g className="iris-group">
          <circle cx="100" cy="60" r="30" fill="url(#irisGlow)" />
          <circle cx="100" cy="60" r="18" fill="var(--accent-color)" />
          <circle cx="100" cy="60" r="10" fill="#111" />
          {/* Catchlight */}
          <circle cx="93" cy="53" r="4" fill="white" />
        </g>

        {/* The Lashes (Top lid) */}
        <g className="lashes-group">
          <path d="M 35 50 Q 20 20 10 10" className="lash" />
          <path d="M 55 35 Q 40 5 35 -10" className="lash" />
          <path d="M 75 25 Q 70 -5 70 -20" className="lash" />
          <path d="M 100 20 Q 100 -10 100 -25" className="lash center-lash" />
          <path d="M 125 25 Q 130 -5 130 -20" className="lash" />
          <path d="M 145 35 Q 160 5 165 -10" className="lash" />
          <path d="M 165 50 Q 180 20 190 10" className="lash" />
        </g>

        {/* The Eyelids (Masking the inner eye) */}
        <g className="lids-group">
          {/* Top Lid */}
          <path className="top-lid" d="M 20 60 Q 100 60 180 60" fill="none" stroke="var(--text-primary)" strokeWidth="5" strokeLinecap="round" />
          {/* Bottom Lid */}
          <path className="bottom-lid" d="M 20 60 Q 100 60 180 60" fill="none" stroke="var(--text-primary)" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedEye;
