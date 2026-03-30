import React from 'react';
import { motion } from 'framer-motion';
import { IMAGES } from '../constants/images';
import './Compatibility.css';

export const Compatibility = () => {
  const compatibilityPoints = [
[
  {
    title: "Android Optimized Solutions",
    desc: "Enjoy our applications designed specifically for Android devices with seamless system integration",
    img: IMAGES.frame1,
  },
  {
    title: "User-Centric Development",
    desc: "Our tools are built with the user in mind, ensuring intuitive interfaces and a smooth, reliable experience",
    img: IMAGES.frame2,
  },
  {
    title: "Global Reach",
    desc: "Our apps are designed for users around the world, with localization and customization for different markets",
    img: IMAGES.frame3,
  },
  {
    title: "Scalable Technology",
    desc: "Our applications are built on robust platforms, ensuring stability and allowing for future feature expansions",
    img: IMAGES.frame4,
  }
];

  return (
    <section className="compatibility gradient-bg-3">
      <div className="compatibility-container container">
        
        <div className="compatibility-content">
          <div className="grid-features">
            {compatibilityPoints.map((point, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="grid-feature-card"
              >
                <div className="grid-feature-icon">
                  <img src={point.img} alt={point.title} />
                </div>
                <div className="grid-feature-text">
                  <h3>{point.title}</h3>
                  <p>{point.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ y: -25 }}
          style={{ scaleX: -1 }}
          transition={{ 
            y: { 
              duration: 3.5, 
              repeat: Infinity, 
              repeatType: "reverse", 
              ease: "easeInOut" 
            },
            opacity: { duration: 0.8 }
          }}
          className="balloons-wrapper"
        >
          <img src={IMAGES.pictureBaloons} alt="Floating Character" className="balloons-img" />
        </motion.div>
      </div>
    </section>
  );
};
