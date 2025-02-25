import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/ElementChart.css';

function ElementChart({ elementData }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  useEffect(() => {
    if (!elementData) return;
    
    const ctx = chartRef.current.getContext('2d');
    
    // 기존 차트 제거
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    // 데이터 준비
    const labels = Object.keys(elementData);
    const data = Object.values(elementData);
    
    // 오행별 색상
    const colors = {
      '목': 'rgba(76, 175, 80, 0.8)',  // 초록색
      '화': 'rgba(244, 67, 54, 0.8)',  // 빨간색
      '토': 'rgba(255, 193, 7, 0.8)',  // 노란색
      '금': 'rgba(255, 235, 59, 0.8)', // 금색
      '수': 'rgba(33, 150, 243, 0.8)'  // 파란색
    };
    
    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: labels.map(label => colors[label]),
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#dff9fb',
              font: {
                family: "'Pretendard', 'Noto Sans KR', sans-serif",
                size: 14
              }
            }
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                return `${label}: ${value}%`;
              }
            }
          }
        }
      }
    });
    
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [elementData]);

  return (
    <div className="element-chart-container">
      <canvas ref={chartRef} height={200}></canvas>
    </div>
  );
}

export default ElementChart;