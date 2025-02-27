import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (count) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <i 
          key={i} 
          className={`fas fa-star ${i < count ? 'filled' : 'empty'}`}
        ></i>
      ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <div className="testimonial-avatar">
          <img src={testimonial.image || '/assets/default-avatar.jpg'} alt={testimonial.name} />
        </div>
        <div className="testimonial-info">
          <h3 className="testimonial-name">{testimonial.name}</h3>
          <div className="testimonial-age">{testimonial.age}세</div>
          <div className="testimonial-stars">
            {renderStars(testimonial.stars)}
          </div>
        </div>
      </div>
      <div className="testimonial-body">
        <p className="testimonial-text">"{testimonial.text}"</p>
      </div>
      <div className="testimonial-quote-icon">
        <i className="fas fa-quote-right"></i>
      </div>
    </div>
  );
};

export default TestimonialCard; 