import React, { useEffect, useRef } from 'react';
import '../styles/ElementDonut.css';

const ElementDonut = ({ elementData }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    try {
      // 데이터 검증
      const defaultData = {
        wood: 20,
        fire: 20,
        earth: 20,
        metal: 20,
        water: 20
      };
      
      const validData = elementData && typeof elementData === 'object' 
        ? { ...defaultData, ...elementData } 
        : defaultData;
      
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2;
      
      // 배경 설정
      ctx.clearRect(0, 0, width, height); // 캔버스 초기화
      ctx.fillStyle = '#f0f3f8';
      ctx.fillRect(0, 0, width, height);
      
      // 도넛 차트 설정
      const outerRadius = Math.min(width, height) * 0.4;
      const innerRadius = outerRadius * 0.6;
      
      // 요소 색상
      const colors = {
        wood: '#4CAF50',  // 녹색
        fire: '#E57373',  // 적색
        earth: '#FFD54F',  // 황색
        metal: '#B0BEC5',  // 은색/회색
        water: '#42A5F5'   // 청색
      };
      
      // 총합 계산 (0이면 기본값 100 사용)
      const total = Object.values(validData).reduce((sum, val) => sum + val, 0) || 100;
      
      // 도넛 차트 그리기
      let startAngle = -Math.PI / 2;
      
      Object.entries(validData).forEach(([element, value]) => {
        try {
          const sliceAngle = (2 * Math.PI * value) / total;
          
          // 요소 슬라이스 그리기
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, outerRadius, startAngle, startAngle + sliceAngle);
          ctx.lineTo(centerX, centerY);
          ctx.fillStyle = colors[element] || '#999999';
          ctx.fill();
          
          // 내부 원 (도넛 홀) 제거
          ctx.beginPath();
          ctx.moveTo(centerX, centerY);
          ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI);
          ctx.fillStyle = '#f0f3f8';
          ctx.fill();
          
          startAngle += sliceAngle;
        } catch (err) {
          console.error('Slice drawing error:', err);
        }
      });
      
      // 중앙 텍스트
      ctx.fillStyle = '#333';
      ctx.font = 'bold 16px Arial, sans-serif'; // 폰트 교체
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('오행 분석', centerX, centerY);
      
    } catch (error) {
      console.error('Element donut rendering error:', error);
    }
  }, [elementData]);
  
  // 기본 데이터 준비 (렌더링용)
  const safeElementData = elementData && typeof elementData === 'object' 
    ? elementData 
    : { wood: 20, fire: 20, earth: 20, metal: 20, water: 20 };
  
  return (
    <div className="element-donut">
      <h3>오행 분석</h3>
      <div className="donut-container">
        <canvas 
          ref={canvasRef} 
          width={300} 
          height={300} 
          className="donut-canvas"
        />
      </div>
      <div className="element-legend">
        {Object.entries(safeElementData).map(([key, value]) => (
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

export default ElementDonut; 