import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../styles/HomePage.css';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">지금 바로 무료로 사주 분석을 받아보세요</h2>
        <p className="cta-subtitle">
          당신의 운명을 알아보는 첫 걸음, 사주포춘과 함께하세요.
          단 5분 만에 당신의 타고난 기질과 운명의 흐름을 파악할 수 있습니다.
        </p>
        
        <div className="cta-features">
          <div className="cta-feature">
            <div className="cta-feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="cta-feature-title">맞춤형 운세 분석</h3>
            <p className="cta-feature-desc">
              AI가 당신의 사주를 분석하여 현재와 미래의 운세를 정확하게 예측합니다.
            </p>
          </div>
          
          <div className="cta-feature">
            <div className="cta-feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="cta-feature-title">빠른 결과 확인</h3>
            <p className="cta-feature-desc">
              단 몇 분 만에 완료되는 분석으로 즉시 결과를 확인할 수 있습니다.
            </p>
          </div>
          
          <div className="cta-feature">
            <div className="cta-feature-icon">
              <i className="fas fa-lock"></i>
            </div>
            <h3 className="cta-feature-title">100% 개인정보 보호</h3>
            <p className="cta-feature-desc">
              입력하신 모든 정보는 암호화되어 안전하게 보호됩니다.
            </p>
          </div>
        </div>
        
        <HashLink to="/#saju-form" className="cta-button">
          무료 사주 분석 받기 <i className="fas fa-arrow-right"></i>
        </HashLink>
      </div>
    </section>
  );
};

export default CTASection; 