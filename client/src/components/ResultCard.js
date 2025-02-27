import React from 'react';
import { motion } from 'framer-motion';

const ResultCard = ({ title, icon, score, description, delay = 0 }) => {
  // 점수에 따른 색상 결정
  const getScoreColor = (score) => {
    if (score >= 80) return '#4CAF50'; // 높음 - 녹색
    if (score >= 60) return '#8BC34A'; // 긍정적 - 연한 녹색
    if (score >= 40) return '#FFC107'; // 중간 - 노란색
    if (score >= 20) return '#FF9800'; // 약간 낮음 - 주황색
    return '#F44336'; // 낮음 - 빨간색
  };
  
  // 점수에 따른 메시지 결정
  const getScoreMessage = (score) => {
    if (score >= 80) return '매우 좋음';
    if (score >= 60) return '좋음';
    if (score >= 40) return '보통';
    if (score >= 20) return '약간 주의';
    return '주의 필요';
  };
  
  return (
    <motion.div 
      className="result-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <div className="result-card-header">
        <div className="result-icon">
          <i className={`fas fa-${icon}`}></i>
        </div>
        <h3 className="result-title">{title}</h3>
      </div>
      
      <div className="result-score-container">
        <motion.div 
          className="result-score-circle"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="#e9ecef" 
              strokeWidth="8"
            />
            <motion.circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke={getScoreColor(score)} 
              strokeWidth="8"
              strokeDasharray={`${2 * Math.PI * 40}`}
              strokeDashoffset={`${2 * Math.PI * 40 * (1 - score / 100)}`}
              strokeLinecap="round"
              initial={{ strokeDashoffset: `${2 * Math.PI * 40}` }}
              animate={{ strokeDashoffset: `${2 * Math.PI * 40 * (1 - score / 100)}` }}
              transition={{ duration: 1.5, delay: delay + 0.3, ease: "easeOut" }}
            />
            <text 
              x="50" 
              y="45" 
              textAnchor="middle" 
              fontSize="18" 
              fontWeight="bold" 
              fill="#333"
            >
              {score}
            </text>
            <text 
              x="50" 
              y="62" 
              textAnchor="middle" 
              fontSize="10" 
              fill="#666"
            >
              / 100
            </text>
          </svg>
        </motion.div>
        
        <div className="score-message" style={{ color: getScoreColor(score) }}>
          {getScoreMessage(score)}
        </div>
      </div>
      
      <div className="result-description">
        <p>{description}</p>
      </div>
      
      <motion.div 
        className="result-card-footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.5 }}
      >
        <button className="card-action-btn">
          <i className="fas fa-plus"></i> 상세보기
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ResultCard; 