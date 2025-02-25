import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      
      <div className="about-container">
        <div className="container">
          <div className="about-header">
            <h1 className="about-title">사주포춘 소개</h1>
            <p className="about-subtitle">
              AI 기술과 동양 철학의 만남, 사주포춘은 당신의 운명을 새롭게 해석합니다.
            </p>
          </div>
          
          <div className="about-content glass-card">
            <div className="about-image">
              <img src="/images/about-company.jpg" alt="사주포춘 회사 이미지" />
            </div>
            <div className="about-text">
              <h3>사주포춘의 철학</h3>
              <p>
                사주포춘은 수천 년 동안 이어져 온 동양의 사주 철학과 최신 AI 기술을 결합하여 
                더 정확하고 개인화된 운세 서비스를 제공하기 위해 설립되었습니다.
              </p>
              <p>
                우리는 단순한 점술이 아닌, 개인의 타고난 기질과 잠재력을 파악하여 
                더 나은 삶의 방향을 제시하는 것을 목표로 합니다.
              </p>
              <p>
                최첨단 AI 기술을 활용하여 전통적인 사주 해석의 한계를 넘어, 
                더 깊고 다양한 관점에서 당신의 운명을 분석합니다.
              </p>
            </div>
          </div>
          
          <div className="about-content glass-card">
            <div className="about-text">
              <h3>우리의 비전</h3>
              <p>
                사주포춘은 동양 철학의 지혜를 현대적으로 재해석하여, 
                누구나 쉽게 접근하고 이해할 수 있는 서비스를 제공하고자 합니다.
              </p>
              <p>
                우리는 단순히 미래를 예측하는 것이 아니라, 개인이 가진 잠재력과 가능성을 
                발견하고 발전시킬 수 있도록 도움을 주는 안내자가 되고자 합니다.
              </p>
              <p>
                지속적인 연구와 기술 개발을 통해 더 정확하고 유용한 정보를 제공하며, 
                사용자의 삶에 긍정적인 변화를 가져오는 것이 우리의 목표입니다.
              </p>
            </div>
            <div className="about-image">
              <img src="/images/about-vision.jpg" alt="사주포춘 비전 이미지" />
            </div>
          </div>
          
          <div className="company-info glass-card">
            <h3>회사 정보</h3>
            <ul>
              <li><strong>회사명:</strong> 사주포춘</li>
              <li><strong>대표:</strong> 김우진</li>
              <li><strong>사업자등록번호:</strong> 426-62-00632</li>
              <li><strong>주소:</strong> 인천 광역시 연수구 청룡로 50번길 2</li>
              <li><strong>이메일:</strong> contact@sajufortune.com</li>
              <li><strong>고객센터:</strong> 1588-1234 (평일 10:00-18:00)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default AboutPage; 