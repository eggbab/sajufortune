import React, { useState } from 'react';
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
      fortune: {
        general: `${formData.name}님의 사주는 목의 기운이 강합니다. 2024년에는 목의 기운을 활용하여 긍정적인 변화를 기대할 수 있습니다.`,
        concern: '건강 관리에 신경 쓰세요. 특히 소화기관과 호흡기에 주의가 필요합니다.',
        advice: '목의 기운을 강화하기 위해 초록색 계열의 옷을 입거나 식물을 키우는 것이 도움이 됩니다.'
      }
    };
    
    // 결과 페이지로 이동
    setTimeout(() => {
      setLoading(false);
      history.push('/result', { userData: formData, sajuResult });
    }, 1500);
  };

  return (
    <div className="homepage-container">
      <Header />
      <main className="main-content">
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">사주포춘</h1>
            <p className="hero-subtitle">
              한국 전통 사주팔자(四柱八字)의 지혜로 당신의 운명을 알아보세요
            </p>
            <a href="#saju-form" className="cta-button">사주 분석 시작하기</a>
          </div>
        </section>

        <section id="saju-form" className="form-section">
          <div className="container">
            <div className="form-container">
              <h2>당신의 사주 정보를 입력하세요</h2>
              
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
                
                <div className="form-row">
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
                      <option value="직장/사업">직장/사업</option>
                      <option value="건강">건강</option>
                      <option value="재물">재물</option>
                      <option value="학업">학업</option>
                    </select>
                  </div>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;