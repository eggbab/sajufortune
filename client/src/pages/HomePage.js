import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/HomePage.css';

function HomePage() {
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
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('폼 제출됨', formData);
    
    // 유효성 검사
    if (!formData.name || !formData.birthDate) {
      setError('이름과 생년월일은 필수 입력 항목입니다.');
      return;
    }
    
    setLoading(true);
    
    // 임시 데이터 생성 (API 호출 대신)
    const sajuResult = {
      yearPillar: '갑자',
      elements: {
        목: 30,
        화: 20,
        토: 15,
        금: 15,
        수: 20
      },
      dominantElement: '목',
      introduction: `${formData.name}님의 사주는 목의 기운이 강하게 나타납니다. 목은 성장과 발전, 창의성을 상징하는 요소로, 당신은 새로운 아이디어를 생각해내고 실행하는 능력이 뛰어납니다.`,
      analysis: `2025년에는 목의 기운이 더욱 강화되어 창의적인 프로젝트나 새로운 시작에 유리한 한 해가 될 것입니다. 특히 봄과 초여름에 중요한 결정을 내리면 좋은 결과를 얻을 수 있습니다.`,
      concernAdvice: `${formData.concern} 분야에서는 꾸준한 노력과 인내가 필요합니다. 특히 6월과 9월에 중요한 기회가 찾아올 수 있으니 준비하고 있다가 놓치지 마세요.`,
      todayAdvice: `오늘은 직관을 믿고 중요한 결정을 내리기 좋은 날입니다. 평소보다 더 자신감을 가지세요.`
    };
    
    // 결과 페이지로 이동
    setTimeout(() => {
      setLoading(false);
      history.push('/result', { userData: formData, sajuResult });
    }, 1500);
  };

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.querySelector('.form-section').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  useEffect(() => {
    if (showForm) {
      document.querySelector('.form-section').style.display = 'block';
    }
  }, [showForm]);

  return (
    <div className="homepage-container">
      <Header />
      
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-stars"></div>
            <div className="hero-planets"></div>
          </div>
          
          <div className="hero-content">
            <h1 className="hero-title glow-text">
              당신의 운명을 <span className="gradient-text">별자리</span>에서 찾아보세요
            </h1>
            <p className="hero-subtitle">
              한국 전통 사주팔자(四柱八字)의 지혜와 현대 AI 기술의 만남
            </p>
            <button className="cta-button" onClick={scrollToForm}>
              <i className="fas fa-magic"></i> 무료 사주 해석 받기
            </button>
          </div>
        </section>
        
        <section className="features-section">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3 className="feature-title">정확한 사주 분석</h3>
              <p className="feature-description">
                수천 년의 동양 철학과 최신 AI 기술을 결합한 정확한 사주 해석을 제공합니다.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-bolt"></i>
              </div>
              <h3 className="feature-title">즉각적인 결과</h3>
              <p className="feature-description">
                몇 초 만에 당신의 사주를 분석하고 상세한 해석을 제공합니다.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-lock"></i>
              </div>
              <h3 className="feature-title">개인정보 보호</h3>
              <p className="feature-description">
                귀하의 정보는 사주 해석에만 사용되며 저장되지 않습니다.
              </p>
            </div>
          </div>
        </section>
        
        <section className="form-section" style={{ display: showForm ? 'block' : 'none' }}>
          <div className="form-container">
            <h2 className="form-title gradient-text">당신의 사주 정보를 입력하세요</h2>
            
            {error && <div className="error-message">{error}</div>}
            
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
                  <option value="기타">기타</option>
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
                  <option value="직장/사업">직장/사업</option>
                  <option value="건강">건강</option>
                  <option value="재물">재물</option>
                  <option value="학업">학업</option>
                </select>
              </div>
              
              <div className="form-privacy">
                개인정보는 사주 분석 목적으로만 사용되며 저장되지 않습니다.
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                {loading ? '분석 중...' : '사주 분석하기'}
              </button>
            </form>
          </div>
        </section>
        
        <section className="testimonials-section">
          <h2 className="testimonials-title gradient-text">사용자 후기</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                정확한 사주 해석에 놀랐습니다. 특히 직장 관련 조언이 정말 도움이 되었어요!
              </p>
              <p className="testimonial-author">김지영, 32세</p>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">
                부적을 구매한 후 정말 운이 좋아진 것 같아요. 면접에 합격했습니다!
              </p>
              <p className="testimonial-author">이민수, 28세</p>
            </div>
            
            <div className="testimonial-card">
              <p className="testimonial-text">
                친구 추천으로 사용해봤는데, 정말 놀랍도록 정확했어요. 주변에 계속 추천하고 있습니다.
              </p>
              <p className="testimonial-author">박서연, 35세</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;