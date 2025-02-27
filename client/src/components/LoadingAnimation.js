import React from 'react';
import { motion } from 'framer-motion';

const LoadingAnimation = () => {
  // 오행 색상
  const elementColors = [
    '#4CAF50', // 목(木) - 녹색
    '#FF5722', // 화(火) - 적색
    '#FFC107', // 토(土) - 황색
    '#9E9E9E', // 금(金) - 백색
    '#2196F3'  // 수(水) - 흑색
  ];
  
  // 원형 애니메이션 변형
  const circleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: [0, 1, 1, 1, 0],
      opacity: [0, 1, 1, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.2,
        times: [0, 0.2, 0.5, 0.8, 1],
        ease: "easeInOut",
      }
    })
  };
  
  // 회전 애니메이션 변형
  const containerVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity
      }
    }
  };
  
  // 천간 지지 심볼
  const symbols = [
    '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸',
    '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'
  ];
  
  // 심볼 애니메이션 변형
  const symbolVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (i) => ({
      opacity: [0, 1, 0],
      y: [10, 0, -10],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: i * 0.1,
        repeatDelay: Math.random() * 2,
        ease: "easeInOut"
      }
    })
  };
  
  return (
    <div className="loading-animation">
      <motion.div 
        className="loading-circles-container"
        variants={containerVariants}
        animate="animate"
      >
        {elementColors.map((color, i) => (
          <motion.div
            key={i}
            className="loading-circle"
            style={{
              background: color,
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              marginLeft: `-15px`,
              marginTop: `-15px`,
              transformOrigin: `${50 + 60 * Math.cos(i * (2 * Math.PI / 5))}% ${50 + 60 * Math.sin(i * (2 * Math.PI / 5))}%`,
              transform: `translate(${60 * Math.cos(i * (2 * Math.PI / 5))}px, ${60 * Math.sin(i * (2 * Math.PI / 5))}px)`,
            }}
            variants={circleVariants}
            initial="initial"
            animate="animate"
            custom={i}
          />
        ))}
      </motion.div>
      
      <div className="loading-symbols-container">
        {symbols.map((symbol, i) => (
          <motion.div
            key={i}
            className="loading-symbol"
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 10 + 14}px`,
              opacity: 0,
              fontFamily: '"Noto Serif KR", serif',
              color: elementColors[Math.floor(Math.random() * elementColors.length)],
            }}
            variants={symbolVariants}
            initial="initial"
            animate="animate"
            custom={i}
          >
            {symbol}
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="loading-text"
        animate={{ 
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <h3>사주 분석 중...</h3>
        <p>동양철학의 지혜를 바탕으로 당신의 사주를 분석하고 있습니다.</p>
        <div className="loading-dots">
          <motion.span
            animate={{ 
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0,
              ease: "easeInOut"
            }}
          >.</motion.span>
          <motion.span
            animate={{ 
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.3,
              ease: "easeInOut"
            }}
          >.</motion.span>
          <motion.span
            animate={{ 
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.6,
              ease: "easeInOut"
            }}
          >.</motion.span>
        </div>
      </motion.div>
    </div>
  );
};

export default LoadingAnimation; 