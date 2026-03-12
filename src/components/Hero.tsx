import React from 'react';
import { motion } from 'framer-motion';
import { Gem, HandHeart, Settings } from 'lucide-react';
import { IMAGES } from '../constants/images';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero gradient-bg-1">
      <div className="container">
        <header className="hero-header">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="logo-container"
          >
            <img src={IMAGES.image418} alt="Logo" className="logo-img" />
            <span className="logo-text">HafaGroupApps</span>
          </motion.div>
        </header>
        
        <div className="hero-content">
          <div className="hero-text-block">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Mobile apps<br />
              created with <br />
              <span className="text-accent">care and attention</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              Android apps for lifestyle and entertainment
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hero-visuals"
          >
            <motion.img 
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
              src={IMAGES.pictureEarth} 
              alt="Earth" 
              className="earth-img" 
            />
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              src={IMAGES.pictureHeader1} 
              alt="App Preview" 
              className="phones-img" 
            />
          </motion.div>
        </div>
      </div>

      <div className="hero-bottom-cards container">
        {[
          { 
            title: "Clever Design", 
            number: "One", 
            delay: 0.6, 
            icon: <Gem size={32} color="#9258C5" strokeWidth={2} />,
            bgColor: "#EAC4FD" 
          },
          { 
            title: "Attention to Details", 
            number: "Two", 
            delay: 0.8, 
            icon: <HandHeart size={32} color="#DE930F" strokeWidth={2} />,
            bgColor: "#FEE4A0" 
          },
          { 
            title: "Stable performance", 
            number: "Three", 
            delay: 1.0, 
            icon: <Settings size={32} color="#38A97C" strokeWidth={2} />,
            bgColor: "#A3F3CA" 
          }
        ].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: item.delay }}
            className="feature-card"
          >
            <div className="icon-wrapper" style={{ backgroundColor: item.bgColor }}>
              {item.icon}
            </div>
            <div className="feature-card-text">
              <h4>{item.number}</h4>
              <p>{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
