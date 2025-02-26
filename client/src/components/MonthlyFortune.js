import React from 'react';
import '../styles/ResultPage.css';

const MonthlyFortune = ({ monthlyData }) => {
  // 데이터가 없을 경우 기본값 사용
  const data = monthlyData || [
    { month: "1월", content: "새로운 시작의 달입니다.", rating: 4 },
    { month: "2월", content: "인간관계에 주의가 필요합니다.", rating: 3 },
    { month: "3월", content: "금전운이 상승합니다.", rating: 5 },
    { month: "4월", content: "건강에 유의하세요.", rating: 2 },
    { month: "5월", content: "여행이 좋은 시기입니다.", rating: 4 },
    { month: "6월", content: "학업과 시험에 유리합니다.", rating: 3 },
    { month: "7월", content: "가족과의 화합이 중요합니다.", rating: 4 },
    { month: "8월", content: "투자에 조심하세요.", rating: 2 },
    { month: "9월", content: "창의력이 빛나는 시기입니다.", rating: 5 },
    { month: "10월", content: "새로운 기회가 옵니다.", rating: 4 },
    { month: "11월", content: "휴식이 필요한 시기입니다.", rating: 3 },
    { month: "12월", content: "한 해를 잘 마무리하세요.", rating: 4 }
  ];
  
  // 별점 렌더링 함수
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? '' : 'empty'}`}>★</span>
      );
    }
    return stars;
  };
  
  return (
    <div className="fortune-flow">
      <h3 className="fortune-flow-title">2025년 월별 운세 흐름</h3>
      
      <div className="monthly-flow">
        {data.slice(0, 6).map((item, index) => (
          <div className={`month-item rating-${item.rating}`} key={index}>
            <div className="month-name">{item.month}</div>
            <div className="month-desc">{item.content}</div>
            <div className="month-rating">
              <div className="stars-container">
                {renderStars(item.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="monthly-flow">
        {data.slice(6, 12).map((item, index) => (
          <div className={`month-item rating-${item.rating}`} key={index + 6}>
            <div className="month-name">{item.month}</div>
            <div className="month-desc">{item.content}</div>
            <div className="month-rating">
              <div className="stars-container">
                {renderStars(item.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthlyFortune; 