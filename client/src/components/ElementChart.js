import React from 'react';
import '../styles/ResultPage.css';

const ElementChart = ({ elementData }) => {
  // 데이터가 없으면 기본값 사용
  const data = elementData || {
    wood: 20,
    fire: 42, 
    earth: 15,
    metal: 13,
    water: 10
  };
  
  // 한글 오행 이름 매핑
  const elementNames = {
    wood: '목',
    fire: '화',
    earth: '토',
    metal: '금',
    water: '수'
  };
  
  return (
    <div className="element-chart-container">
      <h3 className="element-chart-title">오행 분석</h3>
      
      <div className="donut-chart">
        {/* SVG로 도넛 차트 구현 */}
        <svg width="100%" height="100%" viewBox="0 0 42 42">
          <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#1a1a2e" strokeWidth="3"></circle>
          
          {/* 각 오행별 원호 - 데이터에 따라 동적 계산 */}
          <circle 
            cx="21" 
            cy="21" 
            r="15.91549430918954" 
            fill="transparent"
            stroke="#4CAF50" 
            strokeWidth="3"
            strokeDasharray={`${data.wood * 0.01 * 100} ${100 - data.wood * 0.01 * 100}`}
            strokeDashoffset="25"
          />
          <circle 
            cx="21" 
            cy="21" 
            r="15.91549430918954" 
            fill="transparent"
            stroke="#F44336" 
            strokeWidth="3"
            strokeDasharray={`${data.fire * 0.01 * 100} ${100 - data.fire * 0.01 * 100}`}
            strokeDashoffset={`${100 - data.wood * 0.01 * 100 + 25}`}
          />
          <circle 
            cx="21" 
            cy="21" 
            r="15.91549430918954" 
            fill="transparent"
            stroke="#FFC107" 
            strokeWidth="3"
            strokeDasharray={`${data.earth * 0.01 * 100} ${100 - data.earth * 0.01 * 100}`}
            strokeDashoffset={`${100 - (data.wood + data.fire) * 0.01 * 100 + 25}`}
          />
          <circle 
            cx="21" 
            cy="21" 
            r="15.91549430918954" 
            fill="transparent"
            stroke="#B2BEC3" 
            strokeWidth="3"
            strokeDasharray={`${data.metal * 0.01 * 100} ${100 - data.metal * 0.01 * 100}`}
            strokeDashoffset={`${100 - (data.wood + data.fire + data.earth) * 0.01 * 100 + 25}`}
          />
          <circle 
            cx="21" 
            cy="21" 
            r="15.91549430918954" 
            fill="transparent"
            stroke="#0984E3" 
            strokeWidth="3"
            strokeDasharray={`${data.water * 0.01 * 100} ${100 - data.water * 0.01 * 100}`}
            strokeDashoffset={`${100 - (data.wood + data.fire + data.earth + data.metal) * 0.01 * 100 + 25}`}
          />
          
          {/* 중앙 텍스트 */}
          <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="5" fill="white">오행 균형</text>
        </svg>
      </div>
      
      <div className="element-legend">
        {Object.entries(data).map(([element, value]) => (
          <div className="legend-item" key={element}>
            <div className={`legend-color element-${element}`}></div>
            <div className="legend-text">{elementNames[element]}: {value}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElementChart;