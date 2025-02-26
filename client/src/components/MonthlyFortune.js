import React from 'react';
import '../styles/MonthlyFortune.css';

const MonthlyFortune = ({ monthlyData }) => {
  // 기본 데이터 설정
  const data = monthlyData || [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
  const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  
  // 가장 좋은/나쁜 달 찾기
  const maxValue = Math.max(...data);
  const minValue = Math.min(...data);
  const bestMonth = months[data.indexOf(maxValue)];
  const worstMonth = months[data.indexOf(minValue)];
  
  // 현재 월 계산
  const currentMonth = new Date().getMonth();
  
  return (
    <div className="monthly-fortune">
      <h3 className="chart-title">월별 운세 흐름</h3>
      
      <div className="chart-container">
        <div className="chart-y-axis">
          <div className="y-axis-label">상승</div>
          <div className="y-axis-label">보통</div>
          <div className="y-axis-label">하락</div>
        </div>
        
        <div className="chart-bars">
          {data.map((value, index) => (
            <div 
              key={index} 
              className={`chart-bar-container ${index === currentMonth ? 'current' : ''}`}
            >
              <div 
                className="chart-bar" 
                style={{ height: `${value}%` }}
              >
                <span className="bar-value">{value}</span>
              </div>
              <span className="month-label">{months[index]}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="monthly-summary">
        <div className="summary-item best">
          <h4>최고의 달</h4>
          <p><strong>{bestMonth}</strong> - 이 시기에는 중요한 결정이나 새로운 시작에 좋은 에너지가 흐릅니다.</p>
        </div>
        <div className="summary-item worst">
          <h4>주의해야 할 달</h4>
          <p><strong>{worstMonth}</strong> - 이 시기에는 중요한 변화나 결정을 피하고 신중하게 행동하는 것이 좋습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default MonthlyFortune; 