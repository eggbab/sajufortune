import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ResultPage.css';

function ResultPage() {
  const location = useLocation();
  const history = useHistory();
  const { userData, sajuResult } = location.state || {};
  
  useEffect(() => {
    // 결과 데이터가 없으면 홈페이지로 리다이렉트
    if (!userData || !sajuResult) {
      history.replace('/');
    }
    
    // 스크롤을 맨 위로 이동
    window.scrollTo(0, 0);
  }, [userData, sajuResult, history]);
  
  // 결과 데이터가 없으면 로딩 표시
  if (!userData || !sajuResult) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>결과를 불러오는 중...</p>
      </div>
    );
  }
  
  return (
    <div className="result-page">
      <Header />
      
      <main>
        <section className="result-hero">
          <div className="container">
            <h1>{userData.name}님의 사주 분석 결과</h1>
            <p className="result-date">분석일: {new Date().toLocaleDateString()}</p>
          </div>
        </section>
        
        <section className="result-overview">
          <div className="container">
            <div className="result-card">
              <h2>사주 구성</h2>
              <div className="pillars-container">
                <div className="pillar">
                  <div className="pillar-title">년주</div>
                  <div className="pillar-value">{sajuResult.yearPillar}</div>
                </div>
                <div className="pillar">
                  <div className="pillar-title">월주</div>
                  <div className="pillar-value">{sajuResult.monthPillar}</div>
                </div>
                <div className="pillar">
                  <div className="pillar-title">일주</div>
                  <div className="pillar-value">{sajuResult.dayPillar}</div>
                </div>
                <div className="pillar">
                  <div className="pillar-title">시주</div>
                  <div className="pillar-value">{sajuResult.hourPillar || '미상'}</div>
                </div>
              </div>
              
              <div className="dominant-element">
                <h3>주요 오행</h3>
                <div className={`element-badge ${sajuResult.dominantElement === '화' ? 'fire' : 
                                               sajuResult.dominantElement === '수' ? 'water' : 
                                               sajuResult.dominantElement === '목' ? 'wood' : 
                                               sajuResult.dominantElement === '금' ? 'metal' : 
                                               sajuResult.dominantElement === '토' ? 'earth' : ''}`}>
                  {sajuResult.dominantElement}({
                    sajuResult.dominantElement === '화' ? '火' : 
                    sajuResult.dominantElement === '수' ? '水' : 
                    sajuResult.dominantElement === '목' ? '木' : 
                    sajuResult.dominantElement === '금' ? '金' : 
                    sajuResult.dominantElement === '토' ? '土' : ''
                  })
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="result-details">
          <div className="container">
            <div className="result-tabs">
              <div className="tab-content">
                <div className="result-section">
                  <h2>성격 분석</h2>
                  <p>{sajuResult.personality}</p>
                </div>
                
                <div className="result-section">
                  <h2>직업/진로</h2>
                  <p>{sajuResult.career}</p>
                </div>
                
                <div className="result-section">
                  <h2>대인관계</h2>
                  <p>{sajuResult.relationship}</p>
                </div>
                
                <div className="result-section">
                  <h2>재물운</h2>
                  <p>{sajuResult.wealth}</p>
                </div>
                
                <div className="result-section">
                  <h2>건강</h2>
                  <p>{sajuResult.health}</p>
                </div>
                
                <div className="result-section advice-section">
                  <h2>종합 조언</h2>
                  <p>{sajuResult.advice}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="result-cta">
          <div className="container">
            <h2>더 상세한 분석이 필요하신가요?</h2>
            <p>전문 상담사와의 1:1 상담을 통해 더 깊이 있는 사주 해석을 받아보세요.</p>
            <div className="cta-buttons">
              <a href="/premium" className="btn-primary">프리미엄 분석 받기</a>
              <a href="/" className="btn-outline">다시 분석하기</a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default ResultPage;