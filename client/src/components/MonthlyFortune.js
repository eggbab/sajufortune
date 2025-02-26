import React, { useEffect, useRef } from 'react';
import '../styles/MonthlyFortune.css';

const MonthlyFortune = ({ monthlyData }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (!monthlyData) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // 배경 설정
    ctx.fillStyle = '#1e213a';
    ctx.fillRect(0, 0, width, height);
    
    // 별 배경 추가
    drawStars(ctx, width, height);
    
    // 그래프 영역 설정
    const padding = 40;
    const graphWidth = width - padding * 2;
    const graphHeight = height - padding * 2;
    const graphBottom = height - padding;
    const graphLeft = padding;
    
    // 월별 데이터
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const data = monthlyData || months.map(() => Math.floor(Math.random() * 100));
    
    // 그래프 그리드 그리기
    drawGrid(ctx, graphLeft, graphBottom, graphWidth, graphHeight);
    
    // 그래프 선 그리기
    drawGraph(ctx, graphLeft, graphBottom, graphWidth, graphHeight, data);
    
    // 월 레이블 그리기
    drawMonthLabels(ctx, graphLeft, graphBottom, graphWidth, months);
    
    // 범례 추가
    drawLegend(ctx, width, padding);
    
  }, [monthlyData]);
  
  // 그리드 그리기
  const drawGrid = (ctx, left, bottom, width, height) => {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 1;
    
    // 수평선
    for (let i = 0; i <= 5; i++) {
      const y = bottom - (height / 5) * i;
      ctx.beginPath();
      ctx.moveTo(left, y);
      ctx.lineTo(left + width, y);
      ctx.stroke();
      
      // 수치 레이블
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '10px Arial';
      ctx.textAlign = 'right';
      ctx.fillText(`${i * 20}`, left - 10, y + 3);
    }
  };
  
  // 그래프 선 그리기
  const drawGraph = (ctx, left, bottom, width, height, data) => {
    const monthWidth = width / (data.length - 1);
    
    // 그라데이션 영역 준비
    ctx.beginPath();
    ctx.moveTo(left, bottom);
    
    // 각 데이터 포인트 그리기
    data.forEach((value, index) => {
      const x = left + monthWidth * index;
      const y = bottom - (height * value) / 100;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    // 그라데이션 영역 완성
    ctx.lineTo(left + width, bottom);
    ctx.lineTo(left, bottom);
    ctx.closePath();
    
    // 그라데이션 채우기
    const gradient = ctx.createLinearGradient(0, bottom - height, 0, bottom);
    gradient.addColorStop(0, 'rgba(116, 81, 245, 0.8)');
    gradient.addColorStop(1, 'rgba(116, 81, 245, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // 선 그리기
    ctx.beginPath();
    data.forEach((value, index) => {
      const x = left + monthWidth * index;
      const y = bottom - (height * value) / 100;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    
    ctx.strokeStyle = '#9166ff';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // 포인트 그리기
    data.forEach((value, index) => {
      const x = left + monthWidth * index;
      const y = bottom - (height * value) / 100;
      
      // 발광 효과
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
      gradient.addColorStop(0, 'rgba(116, 81, 245, 1)');
      gradient.addColorStop(1, 'rgba(116, 81, 245, 0)');
      
      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // 내부 원
      ctx.beginPath();
      ctx.fillStyle = '#ffffff';
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fill();
      
      // 데이터 값 표시
      if (value > 80 || value < 20 || index % 3 === 0) {
        ctx.fillStyle = 'white';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${value}`, x, y - 15);
      }
    });
  };
  
  // 월 레이블 그리기
  const drawMonthLabels = (ctx, left, bottom, width, months) => {
    const monthWidth = width / (months.length - 1);
    
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    
    months.forEach((month, index) => {
      const x = left + monthWidth * index;
      ctx.fillText(`${month}월`, x, bottom + 20);
    });
  };
  
  // 범례 그리기
  const drawLegend = (ctx, width, padding) => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('운세 지수', width - padding, padding - 15);
  };
  
  // 별 그리기
  const drawStars = (ctx, width, height) => {
    const starCount = 30;
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 1.2;
      const opacity = Math.random() * 0.5 + 0.1;
      
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
    }
  };
  
  return (
    <div className="monthly-fortune">
      <h3>2025년 운세 흐름</h3>
      <div className="chart-container">
        <canvas 
          ref={canvasRef} 
          width={500} 
          height={300} 
          className="fortune-canvas"
        />
      </div>
      <div className="fortune-summary">
        <div className="peak-months">
          <h4>황금기</h4>
          <p>3-4월, 9-10월</p>
        </div>
        <div className="caution-months">
          <h4>주의 기간</h4>
          <p>6-7월</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyFortune; 