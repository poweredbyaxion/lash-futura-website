import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">LASH<span>FUTURA</span></div>
        <div className="social-links">
          <a href="#" aria-label="Facebook">Fb</a>
          <a href="#" aria-label="TikTok">TikTok</a> 
        </div>
        <div className="copyright">
          &copy; {new Date().getFullYear()} LashFutura. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
