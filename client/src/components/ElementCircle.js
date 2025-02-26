import React, { useEffect, useRef } from 'react';
import '../styles/ElementCircle.css';

const ElementCircle = ({ elementData }) => {
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
    const outerRadius = Math.min(width, height) * 0.45;
    const innerRadius = outerRadius * 0.7; // 안쪽 원 위에 요소 배치
    const elementRadius = Math.min(width, height) * 0.1;
    
    // 배경 지우기
    ctx.fillStyle = '#1e213a';
    ctx.fillRect(0, 0, width, height);
    
    // 별 배경 추가
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
    
    // 중앙 발광 효과
    const gradient = ctx.createRadialGradient(
      centerX, centerY, 0,
      centerX, centerY, innerRadius * 0.7
    );
    gradient.addColorStop(0, 'rgba(130, 119, 232, 0.15)');
    gradient.addColorStop(1, 'rgba(130, 119, 232, 0)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius * 0.7, 0, Math.PI * 2);
    ctx.fill();
    
    // 5개 요소의 위치 각도 (내부 원 위에 위치)
    const angles = {
      wood: -Math.PI/2,                // 상단 (북)
      fire: -Math.PI/2 + Math.PI*2/5,  // 우상단 (동북)  
      earth: -Math.PI/2 + Math.PI*4/5, // 우하단 (동남)
      metal: -Math.PI/2 + Math.PI*6/5, // 좌하단 (서남)
      water: -Math.PI/2 + Math.PI*8/5  // 좌상단 (서북)
    };
    
    // 요소 색상
    const colors = {
      wood: '#4CAF50',  // 녹색
      fire: '#E57373',  // 적색
      earth: '#FFD54F',  // 황색
      metal: '#B0BEC5',  // 은색/회색
      water: '#42A5F5'   // 청색
    };
    
    // 요소 한자
    const symbols = {
      wood: '木',
      fire: '火',
      earth: '土',
      metal: '金',
      water: '水'
    };
    
    // 각 요소 그리기
    Object.entries(elementData).forEach(([element, value]) => {
      const angle = angles[element];
      
      // 내부 원 위에 위치 계산
      const x = centerX + Math.cos(angle) * innerRadius;
      const y = centerY + Math.sin(angle) * innerRadius;
      
      // 발광 효과
      const glow = ctx.createRadialGradient(
        x, y, 0,
        x, y, elementRadius * 1.3
      );
      glow.addColorStop(0, colors[element]);
      glow.addColorStop(0.7, colors[element] + '80'); // 50% 투명도
      glow.addColorStop(1, 'rgba(0,0,0,0)');
      
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, elementRadius * 1.3, 0, Math.PI * 2);
      ctx.fill();
      
      // 원 그리기
      ctx.fillStyle = colors[element];
      ctx.beginPath();
      ctx.arc(x, y, elementRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // 테두리
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(x, y, elementRadius, 0, Math.PI * 2);
      ctx.stroke();
      
      // 한자 추가
      ctx.fillStyle = 'white';
      ctx.font = 'bold 24px "Noto Sans KR", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(symbols[element], x, y);
    });
    
  }, [elementData]);
  
  // 별 그리기
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
    <div className="element-circle">
      <h3>오행 분석</h3>
      <div className="circle-container">
        <canvas 
          ref={canvasRef} 
          width={400} 
          height={400} 
          className="element-canvas"
        />
      </div>
    </div>
  );
};

export default ElementCircle; 