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
    gradient.addColorStop(1, 'rgba(130, 119, 232, 0.01)');
    
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(centerX, centerY, innerRadius, 0, Math.PI * 2);
    ctx.fill();
    
    // 오행 요소를 그리기
    if (elementData) {
      // 오행 요소의 위치를 계산 (내부 원 위에 배치)
      const angles = {
        wood: -Math.PI/2, // 목(木) - 상단
        fire: -Math.PI/2 + Math.PI*2/5, // 화(火) - 우상단
        earth: -Math.PI/2 + Math.PI*4/5, // 토(土) - 우하단
        metal: -Math.PI/2 + Math.PI*6/5, // 금(金) - 좌하단
        water: -Math.PI/2 + Math.PI*8/5 // 수(水) - 좌상단
      };
      
      const colors = {
        wood: '#4CAF50', // 녹색
        fire: '#E57373', // 적색
        earth: '#FFD54F', // 황색
        metal: '#B0BEC5', // 은색/회색
        water: '#42A5F5'  // 청색
      };
      
      Object.entries(elementData).forEach(([element, value]) => {
        const angle = angles[element];
        
        // 내부 원 위에 요소 배치 (이 부분이 변경됨)
        const x = centerX + Math.cos(angle) * innerRadius;
        const y = centerY + Math.sin(angle) * innerRadius;
        
        // 발광 효과
        const glowRadius = elementRadius * 1.2;
        const glow = ctx.createRadialGradient(
          x, y, 0,
          x, y, glowRadius
        );
        glow.addColorStop(0, colors[element]);
        glow.addColorStop(0.7, colors[element] + '80'); // 50% 투명도
        glow.addColorStop(1, colors[element] + '00'); // 완전 투명
        
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // 원 그리기
        ctx.fillStyle = colors[element];
        ctx.beginPath();
        ctx.arc(x, y, elementRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // 테두리
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x, y, elementRadius, 0, Math.PI * 2);
        ctx.stroke();
        
        // 텍스트 추가
        ctx.fillStyle = 'white';
        ctx.font = 'bold 30px "Noto Sans KR", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // 한자 텍스트
        const texts = {
          wood: '木',
          fire: '火',
          earth: '土',
          metal: '金',
          water: '水'
        };
        
        ctx.fillText(texts[element], x, y);
      });
    }
    
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