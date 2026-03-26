import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-arc"></div>
      
      <div className="footer-content container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="footer-top-section"
        >
          <div className="footer-logo-wrap">
            <img src={IMAGES.image418} alt="Logo" className="footer-logo" />
          </div>
          <p className="footer-tagline">
            Companion for a healthy lifestyle
          </p>
        </motion.div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="#" className="privacy-link">Privacy Policy</a>
            <span className="email-text">hafagroup@proton.me</span>
          </div>
          <span className="copyright-text">© Copyright 2026</span>
        </div>
      </div>
    </footer>
  );
};
