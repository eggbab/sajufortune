import React, { useEffect, useRef } from 'react';
import '../styles/MonthlyChart.css';

const MonthlyChart = ({ monthlyData }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    try {
      // 데이터 검증
      const validData = Array.isArray(monthlyData) && monthlyData.length === 12 
        ? monthlyData 
        : [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50]; // 기본값
      
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      const width = canvas.width;
      const height = canvas.height;
      
      // 배경 설정
      ctx.clearRect(0, 0, width, height); // 캔버스 초기화
      ctx.fillStyle = '#f0f3f8';
      ctx.fillRect(0, 0, width, height);
      
      // 그래프 영역 설정
      const padding = 40;
      const graphWidth = width - padding * 2;
      const graphHeight = height - padding * 2;
      const barWidth = graphWidth / 12 * 0.7;
      const spacing = graphWidth / 12 * 0.3;
      
      // 월 이름 배열
      const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
      
      // 최대값 찾기 (0이면 기본값 100 사용)
      const maxValue = Math.max(...validData) || 100;
      
      // 가로 선 그리기 (배경)
      ctx.strokeStyle = '#e0e0e0';
      ctx.lineWidth = 1;
      
      const lineCount = 5;
      for (let i = 0; i <= lineCount; i++) {
        const y = padding + graphHeight - (graphHeight / lineCount * i);
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
      }
      
      // 월별 운세 그래프 그리기
      validData.forEach((value, index) => {
        try {
          const x = padding + (graphWidth / 12) * index + spacing / 2;
          const barHeight = (value / maxValue) * graphHeight;
          const y = height - padding - barHeight;
          
          // 월별 상태에 따른 색상 설정
          let barColor;
          if (value >= 75) {
            barColor = '#4CAF50'; // 좋음
          } else if (value >= 50) {
            barColor = '#FFD54F'; // 보통
          } else {
            barColor = '#E57373'; // 주의
          }
          
          // 막대 그래프 그리기 (안전한 방식으로)
          ctx.fillStyle = barColor;
          
          // 안전하게 직사각형 그리기
          ctx.fillRect(x, y, barWidth, barHeight);
          
          // 월 표시
          ctx.fillStyle = '#555';
          ctx.font = '12px Arial, sans-serif'; // 폰트 교체
          ctx.textAlign = 'center';
          ctx.fillText(months[index], x + barWidth / 2, height - padding + 15);
        } catch (err) {
          console.error('Bar drawing error:', err);
        }
      });
      
    } catch (error) {
      console.error('Monthly chart rendering error:', error);
    }
  }, [monthlyData]);
  
  return (
    <div className="monthly-chart">
      <h3>2025년 운세 흐름</h3>
      <div className="chart-container">
        <canvas 
          ref={canvasRef} 
          width={500} 
          height={300} 
          className="monthly-canvas"
        />
      </div>
      <div className="monthly-legend">
        <div className="legend-item good">
          <span className="legend-color"></span>
          <span className="legend-label">좋음</span>
        </div>
        <div className="legend-item average">
          <span className="legend-color"></span>
          <span className="legend-label">보통</span>
        </div>
        <div className="legend-item caution">
          <span className="legend-color"></span>
          <span className="legend-label">주의</span>
        </div>
      </div>
      <div className="peak-periods">
        <div className="peak-item">
          <h4>황금기</h4>
          <p>3-4월, 9-10월</p>
        </div>
        <div className="peak-item">
          <h4>주의 기간</h4>
          <p>6-7월</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyChart; 