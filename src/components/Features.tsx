import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants/images';
import './Features.css';

export const Features = () => {
  const featuresList = [
    "Accurate step counting",
    "Detailed statistics",
    "Achievement system",
    "Set of visual styles",
    "Fine-tuning for yourself"
  ];

  return (
    <section className="features gradient-bg-2">
      <div className="features-container container">
        <div className="features-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="app-icon-wrapper"
          >
            <img src={IMAGES.pictureAppIcon} alt="App Icon" className="app-icon" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="features-title"
          >
            Step Counter<br />
            <span>Companion for a healthy lifestyle</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="features-desc"
          >
            Pedometer is a faithful assistant for maintaining life in good shape and motivating you to lead a healthy lifestyle. Set daily goals, monitor your progress, and improve your fitness with every step
          </motion.p>
          
          <div className="features-list">
            {featuresList.map((text, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                className="feature-item"
              >
                <CheckCircle2 className="feature-check" />
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="features-right">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="promo-image-wrapper"
          >
            <img src={IMAGES.pictureAppPromo} alt="App Promo" className="promo-img" />
          </motion.div>
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            animate={{ y: -20 }}
            style={{ scaleX: -1 }}
            transition={{ 
              y: { 
                duration: 3, 
                repeat: Infinity, 
                repeatType: "reverse", 
                ease: "easeInOut" 
              },
              opacity: { duration: 0.8 }
            }}
            src={IMAGES.pictureRocket} 
            alt="Rocket" 
            className="rocket-img" 
          />
        </div>
      </div>
    </section>
  );
};
