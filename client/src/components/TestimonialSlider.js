import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialSlider = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1: 오른쪽, -1: 왼쪽
  
  // 자동 슬라이드
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  
  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // 특정 슬라이드로 이동
  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };
  
  // 별점 렌더링
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={i < rating ? 'fas fa-star' : 'far fa-star'}
        ></i>
      );
    }
    return stars;
  };
  
  // 슬라이드 애니메이션 변형
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0
    })
  };
  
  return (
    <div className="testimonial-slider">
      <div className="slider-container">
        <button 
          className="slider-arrow prev"
          onClick={prevSlide}
          aria-label="이전 후기"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        
        <div className="slider-content">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div 
              key={currentIndex}
              className="testimonial-slide"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <img 
                      src={testimonials[currentIndex].image || '/assets/default-avatar.jpg'} 
                      alt={testimonials[currentIndex].name} 
                    />
                  </div>
                  <div className="testimonial-info">
                    <h3 className="testimonial-name">{testimonials[currentIndex].name}</h3>
                    <div className="testimonial-meta">
                      <span className="testimonial-age">{testimonials[currentIndex].age}세</span>
                      <span className="testimonial-divider">|</span>
                      <span className="testimonial-product">{testimonials[currentIndex].productName}</span>
                    </div>
                    <div className="testimonial-rating">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>
                </div>
                <div className="testimonial-body">
                  <p className="testimonial-text">"{testimonials[currentIndex].text}"</p>
                </div>
                <div className="testimonial-footer">
                  <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <button 
          className="slider-arrow next"
          onClick={nextSlide}
          aria-label="다음 후기"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      
      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`후기 ${index + 1}로 이동`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider; 