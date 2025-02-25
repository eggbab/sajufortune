import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/ElementChart.css';

function ElementChart({ elements }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  useEffect(() => {
    if (!elements) return;
    
    // 이전 차트 인스턴스 제거
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // 차트 데이터 준비
    const data = {
      labels: ['목(木)', '화(火)', '토(土)', '금(金)', '수(水)'],
      datasets: [{
        label: '오행 분포',
        data: [
          elements.wood || 0,
          elements.fire || 0,
          elements.earth || 0,
          elements.metal || 0,
          elements.water || 0
        ],
        backgroundColor: [
          '#4d6a4f', // 목(木) - 초록색
          '#a83232', // 화(火) - 빨간색
          '#daa520', // 토(土) - 황금색
          '#7d7d7d', // 금(金) - 회색
          '#2c5282'  // 수(水) - 파란색
        ],
        borderWidth: 1
      }]
    };
    
    // 차트 옵션
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: '당신의 사주 오행 분포'
        }
      }
    };
    
    // 차트 생성
    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'polarArea',
      data: data,
      options: options
    });
    
    // 컴포넌트 언마운트 시 차트 정리
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [elements]);
  
  return (
    <div className="element-chart">
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default ElementChart;