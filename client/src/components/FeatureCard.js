import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ feature }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <i className={`fas ${feature.icon}`}></i>
      </div>
      <h3 className="feature-title">{feature.title}</h3>
      <p className="feature-description">{feature.description}</p>
      <div className="feature-hover-effect"></div>
    </div>
  );
};

export default FeatureCard; 