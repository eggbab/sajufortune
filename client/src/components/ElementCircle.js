import React from 'react';
import '../styles/ElementCircle.css';

const ElementCircle = ({ elements }) => {
  // 기본 요소 데이터 설정
  const elementData = elements || {
    wood: 20,
    fire: 25,
    earth: 15,
    metal: 30,
    water: 10
  };
  
  // 가장 강한 요소와 약한 요소 찾기
  const strongest = Object.entries(elementData).reduce((a, b) => a[1] > b[1] ? a : b)[0];
  const weakest = Object.entries(elementData).reduce((a, b) => a[1] < b[1] ? a : b)[0];
  
  // 요소별 한글 이름 매핑
  const koreanNames = {
    wood: '목(木)',
    fire: '화(火)',
    earth: '토(土)',
    metal: '금(金)',
    water: '수(水)'
  };
  
  return (
    <div className="element-circle-container">
      <h3 className="element-title">오행 기운 분석</h3>
      
      <div className="element-circle">
        <div className="outer-circle"></div>
        <div className="inner-circle"></div>
        <div className="center-circle">
          <span>오행</span>
        </div>
        
        <div className="inner-lines">
          <div className="line" style={{ transform: 'rotate(0deg)' }}></div>
          <div className="line" style={{ transform: 'rotate(72deg)' }}></div>
          <div className="line" style={{ transform: 'rotate(144deg)' }}></div>
          <div className="line" style={{ transform: 'rotate(216deg)' }}></div>
          <div className="line" style={{ transform: 'rotate(288deg)' }}></div>
        </div>
        
        <div className="element-positions">
          <div className={`element-position wood ${strongest === 'wood' ? 'strongest' : ''} ${weakest === 'wood' ? 'weakest' : ''}`}>
            <div className="element-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <span className="element-percent">{elementData.wood}%</span>
          </div>
          
          <div className={`element-position fire ${strongest === 'fire' ? 'strongest' : ''} ${weakest === 'fire' ? 'weakest' : ''}`}>
            <div className="element-icon">
              <i className="fas fa-fire"></i>
            </div>
            <span className="element-percent">{elementData.fire}%</span>
          </div>
          
          <div className={`element-position earth ${strongest === 'earth' ? 'strongest' : ''} ${weakest === 'earth' ? 'weakest' : ''}`}>
            <div className="element-icon">
              <i className="fas fa-mountain"></i>
            </div>
            <span className="element-percent">{elementData.earth}%</span>
          </div>
          
          <div className={`element-position metal ${strongest === 'metal' ? 'strongest' : ''} ${weakest === 'metal' ? 'weakest' : ''}`}>
            <div className="element-icon">
              <i className="fas fa-coins"></i>
            </div>
            <span className="element-percent">{elementData.metal}%</span>
          </div>
          
          <div className={`element-position water ${strongest === 'water' ? 'strongest' : ''} ${weakest === 'water' ? 'weakest' : ''}`}>
            <div className="element-icon">
              <i className="fas fa-water"></i>
            </div>
            <span className="element-percent">{elementData.water}%</span>
          </div>
        </div>
      </div>
      
      <div className="element-legend">
        <div className="element-interpretation">
          <h4>당신의 오행 분석</h4>
          <p>
            {koreanNames[strongest]}이(가) <strong>{elementData[strongest]}%</strong>로 가장 강하며,
            {koreanNames[weakest]}이(가) <strong>{elementData[weakest]}%</strong>로 가장 약합니다.
          </p>
          
          <div className="element-balance">
            <p>
              {strongest === 'wood' && '목(木)의 기운이 강하여 창의성과 성장에 유리하지만, 유연함이 필요합니다.'}
              {strongest === 'fire' && '화(火)의 기운이 강하여 열정과 행동력이 뛰어나지만, 안정감이 필요합니다.'}
              {strongest === 'earth' && '토(土)의 기운이 강하여 안정감과 신뢰성이 높지만, 변화에 적응하는 노력이 필요합니다.'}
              {strongest === 'metal' && '금(金)의 기운이 강하여 판단력과 결단력이 좋지만, 부드러움이 필요합니다.'}
              {strongest === 'water' && '수(水)의 기운이 강하여 지혜와 융통성이 뛰어나지만, 집중력이 필요합니다.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementCircle; 