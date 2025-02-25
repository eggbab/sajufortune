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
      const response = await fetch('/api/saju/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('서버 오류가 발생했습니다.');
      }
      
      const data = await response.json();
      
      // 결과 페이지로 이동
      history.push('/result', {
        userData: formData,
        sajuResult: data
      });
      
    } catch (error) {
      console.error('사주 분석 오류:', error);
      setError('사주 분석 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <Header />
      
      <main className="main-content">
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                당신의 운명을 <span className="gradient-text">사주포춘</span>과 함께 알아보세요
              </h1>
              <p className="hero-subtitle">
                AI 기반 사주 분석으로 당신의 타고난 기질과 운명의 흐름을 파악하세요
              </p>
              <div className="hero-cta">
                <button className="cta-button">무료로 사주 보기</button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="form-section" id="saju-form">
          <div className="container">
            <div className="form-container glass-card">
              <h2 className="form-title">사주 정보 입력</h2>
              
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
                  <select
                    id="birthTime"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                  >
                    <option value="">모름</option>
                    <option value="23:30-01:30">자시 (23:30-01:30)</option>
                    <option value="01:30-03:30">축시 (01:30-03:30)</option>
                    <option value="03:30-05:30">인시 (03:30-05:30)</option>
                    <option value="05:30-07:30">묘시 (05:30-07:30)</option>
                    <option value="07:30-09:30">진시 (07:30-09:30)</option>
                    <option value="09:30-11:30">사시 (09:30-11:30)</option>
                    <option value="11:30-13:30">오시 (11:30-13:30)</option>
                    <option value="13:30-15:30">미시 (13:30-15:30)</option>
                    <option value="15:30-17:30">신시 (15:30-17:30)</option>
                    <option value="17:30-19:30">유시 (17:30-19:30)</option>
                    <option value="19:30-21:30">술시 (19:30-21:30)</option>
                    <option value="21:30-23:30">해시 (21:30-23:30)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>성별</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value="남성"
                        checked={formData.gender === '남성'}
                        onChange={handleChange}
                      />
                      남성
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="gender"
                        value="여성"
                        checked={formData.gender === '여성'}
                        onChange={handleChange}
                      />
                      여성
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="concern">가장 알고 싶은 것</label>
                  <select
                    id="concern"
                    name="concern"
                    value={formData.concern}
                    onChange={handleChange}
                  >
                    <option value="연애/결혼">연애/결혼</option>
                    <option value="직업/진로">직업/진로</option>
                    <option value="재물/사업">재물/사업</option>
                    <option value="건강">건강</option>
                    <option value="대인관계">대인관계</option>
                    <option value="종합운세">종합운세</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={loading}
                >
                  {loading ? '분석 중...' : '무료 사주 분석 받기'}
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