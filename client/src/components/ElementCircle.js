import React from 'react';
import '../styles/ElementCircle.css';

const ElementCircle = ({ elementData }) => {
  // 기본 데이터 준비
  const elements = elementData || {
    wood: 30,
    fire: 25,
    earth: 15,
    metal: 20,
    water: 10
  };
  
  // 요소별 한글 이름 매핑
  const koreanNames = {
    wood: '목(木)',
    fire: '화(火)',
    earth: '토(土)',
    metal: '금(金)',
    water: '수(水)'
  };
  
  // 요소별 특성 설명
  const descriptions = {
    wood: '창의성, 성장, 발전',
    fire: '열정, 통찰력, 변화',
    earth: '안정, 신뢰, 균형',
    metal: '결단력, 의지, 정확성',
    water: '지혜, 유연함, 적응력'
  };
  
  // 요소별 퍼센트 계산
  const total = Object.values(elements).reduce((acc, val) => acc + val, 0);
  const percentages = {};
  Object.entries(elements).forEach(([key, value]) => {
    percentages[key] = Math.round((value / total) * 100);
  });
  
  // 주요 요소 찾기 (가장 높은 값)
  const dominantElement = Object.entries(elements).reduce(
    (max, [key, val]) => val > max.val ? {key, val} : max, 
    {key: '', val: 0}
  ).key;
  
  return (
    <div className="element-circle-container">
      <h3 className="element-title">오행 분석</h3>
      
      <div className="element-circle">
        {/* 오행 원 테두리 */}
        <div className="circle-border"></div>
        
        {/* 내부 선 */}
        <div className="inner-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
          <div className="line line-4"></div>
          <div className="line line-5"></div>
        </div>
        
        {/* 요소 포지션 */}
        <div className={`element-position wood ${dominantElement === 'wood' ? 'dominant' : ''}`}>
          <div className="element-icon">木</div>
          <div className="element-percent">{percentages.wood}%</div>
        </div>
        
        <div className={`element-position fire ${dominantElement === 'fire' ? 'dominant' : ''}`}>
          <div className="element-icon">火</div>
          <div className="element-percent">{percentages.fire}%</div>
        </div>
        
        <div className={`element-position earth ${dominantElement === 'earth' ? 'dominant' : ''}`}>
          <div className="element-icon">土</div>
          <div className="element-percent">{percentages.earth}%</div>
        </div>
        
        <div className={`element-position metal ${dominantElement === 'metal' ? 'dominant' : ''}`}>
          <div className="element-icon">金</div>
          <div className="element-percent">{percentages.metal}%</div>
        </div>
        
        <div className={`element-position water ${dominantElement === 'water' ? 'dominant' : ''}`}>
          <div className="element-icon">水</div>
          <div className="element-percent">{percentages.water}%</div>
        </div>
        
        {/* 중앙 원 */}
        <div className="center-circle">
          <p>오행</p>
          <p>균형</p>
        </div>
      </div>
      
      <div className="element-description">
        <div className="dominant-element">
          <h4>주요 기운</h4>
          <p><strong>{koreanNames[dominantElement]}</strong>: {descriptions[dominantElement]}</p>
        </div>
        
        <div className="element-list">
          {Object.entries(elements).map(([key, value]) => (
            <div key={key} className={`element-item ${key} ${key === dominantElement ? 'highlight' : ''}`}>
              <span className="element-name">{koreanNames[key]}</span>
              <div className="progress-container">
                <div className="progress-bar" style={{width: `${percentages[key]}%`}}></div>
              </div>
              <span className="element-value">{percentages[key]}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElementCircle; 