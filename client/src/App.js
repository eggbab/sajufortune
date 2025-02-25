import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

function App() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    gender: '남성',
    concern: '연애/결혼'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.birthDate) {
      setError('이름과 생년월일을 입력해주세요.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      // 서버 API 호출 대신 임시 데이터 사용
      // 로딩 애니메이션을 보여주기 위해 setTimeout 사용
      setTimeout(() => {
        const mockData = {
          dominantElement: "화",
          personality: "열정적이고 활동적인 성격입니다. 창의력이 뛰어나며 새로운 아이디어를 내는 것을 좋아합니다.",
          career: "창의적인 분야나 리더십을 발휘할 수 있는 직업이 적합합니다.",
          relationship: "열정적인 연애 스타일을 가지고 있으며, 파트너에게 헌신적입니다.",
          wealth: "재물운은 양호하나 충동적인 소비에 주의해야 합니다.",
          health: "심장과 혈액순환에 관련된 건강 문제에 주의가 필요합니다.",
          yearPillar: "갑진",
          monthPillar: "병오",
          dayPillar: "정해",
          hourPillar: "무자",
          advice: "균형 잡힌 생활과 감정 조절이 중요합니다."
        };
        
        // 결과 페이지로 이동
        history.push('/result', {
          userData: formData,
          sajuResult: mockData
        });
        
        setLoading(false);
      }, 3000); // 3초 후에 결과 페이지로 이동
      
    } catch (error) {
      console.error('사주 분석 오류:', error);
      setError('사주 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      {/* 헤더 섹션 */}
      <header className="site-header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <a href="/">사주포춘</a>
            </div>
            <nav className="main-nav">
              <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/about">소개</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* 히어로 섹션 */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1>당신의 운명을 AI가 분석합니다</h1>
              <p>사주팔자를 기반으로 한 정확한 운세 분석, 지금 바로 무료로 체험해보세요.</p>
              <a href="#saju-form" className="btn-primary">무료 사주 분석 받기</a>
            </div>
            <div className="hero-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </section>

        {/* AI 사주 설명 섹션 */}
        <section className="ai-explanation">
          <div className="container">
            <h2>AI 사주 분석이란?</h2>
            <p className="section-subtitle">인공지능이 당신의 사주를 정확하게 분석합니다</p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <span role="img" aria-label="accuracy">🎯</span>
                </div>
                <h3>높은 정확도</h3>
                <p>수천 년간 축적된 사주 데이터와 현대 AI 기술의 결합으로 높은 정확도를 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <span role="img" aria-label="personalized">👤</span>
                </div>
                <h3>맞춤형 분석</h3>
                <p>당신만의 고유한 사주를 분석하여 개인화된 운세와 조언을 제공합니다.</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">
                  <span role="img" aria-label="comprehensive">🔍</span>
                </div>
                <h3>종합적 해석</h3>
                <p>성격, 적성, 연애, 직업, 재물운 등 다양한 영역에 대한 종합적 분석을 제공합니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 사주 입력 폼 섹션 */}
        <section id="saju-form" className="saju-form">
          <div className="container">
            <h2>무료 사주 분석</h2>
            <p className="section-subtitle">아래 정보를 입력하시면 AI가 당신의 사주를 분석해드립니다</p>
            
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="이름을 입력하세요"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthDate">생년월일</label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthTime">태어난 시간 (선택사항)</label>
                  <input
                    type="time"
                    id="birthTime"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="gender">성별</label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="남성">남성</option>
                    <option value="여성">여성</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="concern">주요 관심사</label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                  >
                    <option value="연애/결혼">연애/결혼</option>
                    <option value="직업/진로">직업/진로</option>
                    <option value="재물/투자">재물/투자</option>
                    <option value="건강">건강</option>
                    <option value="대인관계">대인관계</option>
                  </select>
                </div>
                
                {error && <div className="error-message">{error}</div>}
                
                <button type="submit" className="btn-primary" disabled={loading}>
                  {loading ? (
                    <div className="loading-container">
                      <div className="loading-spinner"></div>
                      <span>분석 중...</span>
                    </div>
                  ) : (
                    '무료 사주 분석 받기'
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FAQ 섹션 */}
        <section className="faq">
          <div className="container">
            <h2>자주 묻는 질문</h2>
            <p className="section-subtitle">사주포춘에 대한 궁금증을 해결해드립니다</p>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3>사주 분석은 어떻게 이루어지나요?</h3>
                <p>사주팔자(四柱八字)는 태어난 년, 월, 일, 시를 기준으로 분석합니다. 각 요소가 나타내는 오행(木, 火, 土, 金, 水)의 조합을 통해 개인의 성격, 적성, 운명의 흐름을 파악합니다.</p>
              </div>
              
              <div className="faq-item">
                <h3>정확한 분석을 위해 필요한 정보는 무엇인가요?</h3>
                <p>정확한 생년월일과 태어난 시간이 가장 중요합니다. 시간을 모르시는 경우에도 기본적인 분석은 가능하지만, 더 정확한 결과를 위해서는 태어난 시간까지 입력해주시는 것이 좋습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="cta">
          <div className="container">
            <h2>지금 바로 무료로 사주 분석을 받아보세요</h2>
            <p>당신의 운명을 알아보는 첫 걸음, 사주포춘과 함께하세요.</p>
            <a href="#saju-form" className="btn-primary">무료 사주 분석 받기</a>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <h3>사주포춘</h3>
              <p>AI 기반 사주 분석 서비스</p>
            </div>
            <div className="footer-links">
              <h4>바로가기</h4>
              <ul>
                <li><a href="/">홈</a></li>
                <li><a href="/about">소개</a></li>
                <li><a href="#saju-form">사주 분석</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>문의하기</h4>
              <p>이메일: info@sajufortune.com</p>
              <p>전화: 02-123-4567</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2023 사주포춘. All rights reserved.</p>
            <p><a href="/privacy">개인정보처리방침</a> | <a href="/terms">이용약관</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;