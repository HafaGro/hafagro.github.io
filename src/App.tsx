import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Compatibility } from './components/Compatibility';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Features />
      <Compatibility />
      <Footer />
    </div>
  );
}

export default App;
