import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Premium = () => {
  return (
    <div className="premium-page">
      <Header />
      <div className="premium-content">
        <div className="premium-header">
          <h1>프리미엄 서비스</h1>
          <p>더 깊고 자세한 운세 분석을 경험해보세요</p>
        </div>
        
        <div className="premium-plans">
          <div className="premium-plan">
            <h2>기본 프리미엄</h2>
            <p className="plan-price">₩15,000</p>
            <ul className="plan-features">
              <li>상세한 사주 분석</li>
              <li>연간 운세 예측</li>
              <li>개인 맞춤형 조언</li>
            </ul>
            <button className="plan-button">구매하기</button>
          </div>
          
          <div className="premium-plan featured">
            <div className="plan-badge">인기</div>
            <h2>전문가 프리미엄</h2>
            <p className="plan-price">₩25,000</p>
            <ul className="plan-features">
              <li>모든 기본 프리미엄 기능</li>
              <li>전문가의 상세 분석</li>
              <li>월별 운세 업데이트</li>
              <li>1회 화상 상담</li>
            </ul>
            <button className="plan-button">구매하기</button>
          </div>
          
          <div className="premium-plan">
            <h2>VIP 프리미엄</h2>
            <p className="plan-price">₩45,000</p>
            <ul className="plan-features">
              <li>모든 전문가 프리미엄 기능</li>
              <li>무제한 운세 업데이트</li>
              <li>3회 화상 상담</li>
              <li>24시간 채팅 지원</li>
              <li>맞춤형 PDF 보고서</li>
            </ul>
            <button className="plan-button">구매하기</button>
          </div>
        </div>
        
        <div className="premium-testimonials">
          <h2>고객 후기</h2>
          <div className="testimonials-container">
            <div className="testimonial">
              <p>"정확한 분석에 놀랐습니다. 제 인생의 중요한 결정에 큰 도움이 되었어요."</p>
              <div className="testimonial-author">- 김지영</div>
            </div>
            
            <div className="testimonial">
              <p>"매달 업데이트되는 운세를 통해 미리 대비할 수 있어 좋았습니다."</p>
              <div className="testimonial-author">- 박민수</div>
            </div>
            
            <div className="testimonial">
              <p>"전문가와의 상담이 정말 도움이 되었고, 새로운 시각을 얻었습니다."</p>
              <div className="testimonial-author">- 이하나</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Premium; 