import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <Header />
      
      <main>
        <section className="about-hero">
          <div className="container">
            <h1>사주포춘 소개</h1>
            <p>AI 기술로 새롭게 해석하는 사주 분석 서비스</p>
          </div>
        </section>
        
        <section className="about-content">
          <div className="container">
            <div className="about-grid">
              <div className="about-text">
                <h2>사주포춘의 철학</h2>
                <p>
                  사주포춘은 수천 년 동안 이어져 온 동양의 사주 철학과 현대 AI 기술을 결합하여 
                  더 정확하고 개인화된 사주 분석을 제공하는 서비스입니다. 
                  우리는 고대의 지혜와 현대 기술의 조화를 통해 사람들이 자신의 잠재력을 발견하고 
                  더 나은 삶의 방향을 찾을 수 있도록 돕고자 합니다.
                </p>
                <p>
                  전통적인 사주 해석은 해석자의 주관적 경험과 지식에 크게 의존하여 일관성이 부족할 수 있습니다. 
                  사주포춘은 방대한 데이터를 학습한 AI 기술을 활용하여 객관적이고 일관된 해석을 제공하며, 
                  현대적 맥락을 반영한 실용적인 조언을 통해 사용자들의 삶에 실질적인 도움을 드리고자 합니다.
                </p>
              </div>
              
              <div className="about-image">
                <div className="image-placeholder"></div>
              </div>
            </div>
            
            <div className="about-team">
              <h2>팀 소개</h2>
              <p>사주포춘은 동양 철학 전문가, 데이터 과학자, 개발자들이 모여 만든 서비스입니다.</p>
              
              <div className="team-grid">
                <div className="team-member">
                  <div className="member-avatar"></div>
                  <h3>김철학</h3>
                  <p>동양철학 박사</p>
                  <p>30년 경력의 사주 전문가로, AI 학습 데이터의 품질을 관리합니다.</p>
                </div>
                
                <div className="team-member">
                  <div className="member-avatar"></div>
                  <h3>이데이터</h3>
                  <p>AI 연구원</p>
                  <p>사주 분석 알고리즘 개발 및 모델 학습을 담당합니다.</p>
                </div>
                
                <div className="team-member">
                  <div className="member-avatar"></div>
                  <h3>박개발</h3>
                  <p>소프트웨어 엔지니어</p>
                  <p>사용자 친화적인 웹 서비스 개발을 담당합니다.</p>
                </div>
              </div>
            </div>
            
            <div className="about-mission">
              <h2>우리의 미션</h2>
              <p>
                사주포춘의 미션은 고대의 지혜를 현대 기술로 재해석하여, 
                모든 사람이 자신의 타고난 기질과 잠재력을 이해하고 
                더 나은 삶의 선택을 할 수 있도록 돕는 것입니다.
              </p>
              <p>
                우리는 사주 분석이 단순한 점술이 아닌, 
                자기 이해와 성장을 위한 도구가 될 수 있다고 믿습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default AboutPage; 