import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function ElementChart({ elementData }) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  
  useEffect(() => {
    if (!elementData) return;
    
    // 이전 차트 인스턴스 제거
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    
    const ctx = chartRef.current.getContext('2d');
    
    const labels = Object.keys(elementData);
    const data = Object.values(elementData);
    
    // 오행에 따른 색상 매핑
    const colors = {
      '목': '#4d6a4f', // 녹색
      '화': '#a83232', // 적색
      '토': '#daa520', // 황금색
      '금': '#7d7d7d', // 회색
      '수': '#2c5282'  // 청색
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
              font: {
                family: "'Noto Sans KR', sans-serif",
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