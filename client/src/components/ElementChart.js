import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/ElementChart.css';

const ElementChart = ({ elements }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!canvasRef.current || !elements) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 20;
    
    // 캔버스 초기화
    ctx.clearRect(0, 0, width, height);
    
    // 오행 색상 설정
    const colors = {
      wood: '#4CAF50',  // 녹색
      fire: '#FF5722',  // 적색
      earth: '#FFC107', // 황색
      metal: '#9E9E9E', // 백색
      water: '#2196F3'  // 흑색
    };
    
    // 오행 데이터 준비
    const data = [
      { name: '목(木)', value: elements.wood, color: colors.wood },
      { name: '화(火)', value: elements.fire, color: colors.fire },
      { name: '토(土)', value: elements.earth, color: colors.earth },
      { name: '금(金)', value: elements.metal, color: colors.metal },
      { name: '수(水)', value: elements.water, color: colors.water }
    ];
    
    const total = data.reduce((sum, item) => sum + item.value, 0);
    
    // 원형 차트 그리기
    let startAngle = -Math.PI / 2; // 12시 방향에서 시작
    
    data.forEach(item => {
      const sliceAngle = (2 * Math.PI * item.value) / total;
      
      // 부채꼴 그리기
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.closePath();
      
      // 부채꼴 채우기
      ctx.fillStyle = item.color;
      ctx.fill();
      
      // 테두리 그리기
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#fff';
      ctx.stroke();
      
      // 텍스트 위치 계산
      const textAngle = startAngle + sliceAngle / 2;
      const textRadius = radius * 0.7;
      const textX = centerX + textRadius * Math.cos(textAngle);
      const textY = centerY + textRadius * Math.sin(textAngle);
      
      // 텍스트 그리기
      ctx.save();
      ctx.translate(textX, textY);
      ctx.rotate(textAngle + Math.PI / 2);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 14px "Noto Sans KR", sans-serif';
      ctx.fillText(item.name, 0, 0);
      ctx.restore();
      
      // 다음 부채꼴의 시작 각도 업데이트
      startAngle += sliceAngle;
    });
    
    // 중앙 원 그리기
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.3, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#8e44ad';
    ctx.stroke();
    
    // 중앙 텍스트 그리기
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#333';
    ctx.font = 'bold 16px "Noto Sans KR", sans-serif';
    ctx.fillText('오행', centerX, centerY);
    
  }, [elements]);
  
  return (
    <div className="element-chart">
      <motion.div 
        className="chart-container"
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <canvas 
          ref={canvasRef} 
          width={300} 
          height={300}
          className="chart-canvas"
        />
      </motion.div>
      
      <div className="element-indicators">
        {Object.entries(elements).map(([element, value]) => (
          <motion.div 
            key={element} 
            className={`element-indicator ${element}`}
            initial={{ width: 0 }}
            animate={{ width: `${value}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <span className="element-name">
              {element === 'wood' && '목(木)'}
              {element === 'fire' && '화(火)'}
              {element === 'earth' && '토(土)'}
              {element === 'metal' && '금(金)'}
              {element === 'water' && '수(水)'}
            </span>
            <span className="element-value">{value}%</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElementChart;