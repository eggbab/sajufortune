import React, { useEffect, useRef } from 'react';
import '../styles/ElementChart.css';

const ElementChart = ({ elementData }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!elementData) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    
    // 차트 설정
    const outerRadius = Math.min(width, height) * 0.45; // 바깥 원 반지름
    const innerRadius = outerRadius * 0.7; // 안쪽 원 반지름 - 오행 요소가 위치할 원
    const elementRadius = Math.min(width, height) * 0.12; // 오행 요소 원의 크기
    
    // 배경 그리기
    ctx.clearRect(0, 0, width, height);
    
    // 은은한 별 배경 (밤하늘 느낌)
    ctx.fillStyle = '#1e213a'; // 어두운 남색 배경
    ctx.fillRect(0, 0, width, height);
    
    // 별 그리기
    drawStars(ctx, width, height);
    
    // 원 그리기
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    
    // 바깥 원
    ctx.beginPath();
    ctx.arc(centerX, centerY, outerRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // 안쪽 원
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.stroke();
    
    // 중앙에서 빛나는 효과
    const gradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, innerRadius
    );
    gradient.addColorStop(0, 'rgba(130, 119, 232, 0.1)');
    gradient.addColorStop(1, 'rgba(130, 119, 232, 0)');
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // 오행 요소 색상
    const elementColors = {
      wood: '#4CAF50', // 초록
      fire: '#E57373', // 빨강
      earth: '#FFD54F', // 노랑
      metal: '#B0BEC5', // 회색/은색
      water: '#42A5F5'  // 파랑
    };
    
    // 오행 요소 이름 (한자)
    const elementSymbols = {
      wood: '木',
      fire: '火',
      earth: '土',
      metal: '金',
      water: '水'
    };
    
    // 오행 요소 위치 계산 (안쪽 원 위)
    const positions = {
      wood: { x: centerX, y: centerY - innerRadius }, // 북
      fire: { x: centerX + innerRadius * Math.cos(Math.PI * 0.7), y: centerY - innerRadius * Math.sin(Math.PI * 0.7) }, // 동남
      earth: { x: centerX + innerRadius * Math.cos(Math.PI * 1.3), y: centerY + innerRadius * Math.sin(Math.PI * 0.3) }, // 동남
      metal: { x: centerX - innerRadius * Math.cos(Math.PI * 1.3), y: centerY + innerRadius * Math.sin(Math.PI * 0.3) }, // 서남
      water: { x: centerX - innerRadius * Math.cos(Math.PI * 0.7), y: centerY - innerRadius * Math.sin(Math.PI * 0.7) }  // 서북
    };
    
    // 오행 요소 그리기
    Object.keys(elementData).forEach(element => {
      const pos = positions[element];
      
      // 발광 효과
      const glowGradient = ctx.createRadialGradient(
        pos.x, pos.y, 0,
        pos.x, pos.y, elementRadius * 1.2
      );
      const baseColor = elementColors[element];
      const glowColor = baseColor + '33'; // 알파값 추가
      
      glowGradient.addColorStop(0, baseColor);
      glowGradient.addColorStop(1, glowColor);
      
      ctx.beginPath();
      ctx.fillStyle = glowGradient;
      ctx.arc(pos.x, pos.y, elementRadius * 1.1, 0, Math.PI * 2);
      ctx.fill();
      
      // 원 그리기
      ctx.beginPath();
      ctx.fillStyle = elementColors[element];
      ctx.arc(pos.x, pos.y, elementRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // 텍스트 그리기
      ctx.fillStyle = 'white';
      ctx.font = `bold ${elementRadius}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(elementSymbols[element], pos.x, pos.y);
    });
    
  }, [elementData]);
  
  // 별 그리기 함수
  const drawStars = (ctx, width, height) => {
    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 1.5;
      const opacity = Math.random() * 0.8 + 0.2;
      
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  return (
    <div className="element-chart">
      <h3>오행 분석</h3>
      <div className="chart-container">
        <canvas 
          ref={canvasRef} 
          width={500} 
          height={500} 
          className="element-canvas"
        />
      </div>
      <div className="element-legend">
        {elementData && Object.entries(elementData).map(([key, value]) => (
          <div className="legend-item" key={key}>
            <span className={`legend-color ${key}`}></span>
            <span className="legend-label">
              {key === 'wood' && '목(木)'}
              {key === 'fire' && '화(火)'}
              {key === 'earth' && '토(土)'}
              {key === 'metal' && '금(金)'}
              {key === 'water' && '수(水)'}
            </span>
            <span className="legend-value">{value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementChart;