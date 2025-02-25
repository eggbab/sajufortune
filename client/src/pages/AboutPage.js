import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page-container">
      <Header />
      
      <main className="about-content">
        <div className="container">
          <section className="about-header">
            <h1 className="gradient-text">사주포춘 소개</h1>
            <div className="oriental-divider"></div>
            <p className="about-subtitle">동양의 지혜와 현대 기술의 만남</p>
          </section>
          
          <section className="about-story glass-card">
            <h2>우리의 이야기</h2>
            <p>
              사주포춘은 2020년, 수천 년 동안 이어져 온 동양의 사주 철학과 최신 인공지능 기술을 결합하여 
              더 정확하고 개인화된 사주 해석을 제공하고자 하는 목표로 설립되었습니다.
            </p>
            <p>
              우리는 전통적인 사주 해석의 깊이와 현대 기술의 정확성을 결합하여, 
              누구나 쉽게 자신의 운명을 이해하고 더 나은 결정을 내릴 수 있도록 돕고 있습니다.
            </p>
          </section>
          
          <section className="about-mission glass-card">
            <h2>미션과 비전</h2>
            <p>
              <strong>미션:</strong> 동양 철학의 지혜를 현대적으로 재해석하여 모든 사람이 자신의 잠재력을 
              최대한 발휘할 수 있도록 안내합니다.
            </p>
            <p>
              <strong>비전:</strong> 전통 사주학의 가치를 보존하면서도 기술 혁신을 통해 
              더 많은 사람들에게 개인화된 인사이트를 제공하는 글로벌 플랫폼이 되는 것입니다.
            </p>
          </section>
          
          <section className="about-team glass-card">
            <h2>전문가 팀</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-member-image"></div>
                <h3>김도원</h3>
                <p className="team-title">창립자 & 수석 사주 전문가</p>
                <p>40년 이상의 사주 연구 경험을 가진 대한민국 최고의 사주 전문가</p>
              </div>
              
              <div className="team-member">
                <div className="team-member-image"></div>
                <h3>이지혜</h3>
                <p className="team-title">AI 연구 책임자</p>
                <p>인공지능과 전통 철학의 융합 연구를 주도하는 컴퓨터 과학 박사</p>
              </div>
              
              <div className="team-member">
                <div className="team-member-image"></div>
                <h3>박민준</h3>
                <p className="team-title">동양철학 연구원</p>
                <p>한국과 중국의 전통 철학을 현대적으로 해석하는 연구를 진행</p>
              </div>
            </div>
          </section>
          
          <section className="about-values glass-card">
            <h2>우리의 가치</h2>
            <div className="values-grid">
              <div className="value-item">
                <h3>전통의 존중</h3>
                <p>수천 년 동안 이어져 온 동양 철학의 지혜를 소중히 여기고 보존합니다.</p>
              </div>
              
              <div className="value-item">
                <h3>혁신적 접근</h3>
                <p>최신 기술을 활용하여 전통적인 사주 해석을 더욱 정확하고 접근하기 쉽게 만듭니다.</p>
              </div>
              
              <div className="value-item">
                <h3>개인화된 경험</h3>
                <p>모든 사람의 사주는 고유하며, 우리는 각 개인에게 맞춤화된 인사이트를 제공합니다.</p>
              </div>
              
              <div className="value-item">
                <h3>윤리적 실천</h3>
                <p>고객의 개인정보 보호와 윤리적인 서비스 제공을 최우선으로 생각합니다.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default AboutPage; 