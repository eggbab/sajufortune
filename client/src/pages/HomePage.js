import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sajuApi } from '../api/sajuApi';
import '../styles/HomePage.css';

function HomePage() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    gender: '선택하세요',
    concern: '선택하세요'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // 유효성 검사
    if (!formData.name || !formData.birthDate || formData.gender === '선택하세요') {
      setError('이름, 생년월일, 성별은 필수 입력 항목입니다.');
      return;
    }
    
    setLoading(true);
    try {
      // API 호출로 사주 분석 요청
      const response = await sajuApi.generateSaju(formData);
      
      // 결과 페이지로 이동하면서 데이터 전달
      history.push({
        pathname: '/result',
        state: { 
          userData: formData,
          sajuResult: response
        }
      });
    } catch (err) {
      setError('사주 생성 중 오류가 발생했습니다. 다시 시도해 주세요.');
      console.error('Error generating saju:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-container">
      <Header />
      
      <main className="main-content">
        <section className="hero-section">
          <h1>무료 AI 사주 해석 받기</h1>
          <p>한국 사주팔자(四柱八字)의 지혜로 당신의 운명을 알아보세요</p>
        </section>
        
        <section className="form-section">
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
              
              <div className="form-group">
                <label htmlFor="gender">성별</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="선택하세요" disabled>선택하세요</option>
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
                  <option value="선택하세요" disabled>선택하세요</option>
                  <option value="연애">연애/결혼</option>
                  <option value="직업">직업/경력</option>
                  <option value="건강">건강</option>
                  <option value="재물">재물/금전</option>
                  <option value="일반">일반 운세</option>
                </select>
              </div>
              
              <div className="form-privacy">
                <p>* 귀하의 정보는 사주 해석 생성에만 사용되며, 저장되지 않습니다.</p>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                {loading ? '사주 분석 중...' : '내 사주 받기'}
              </button>
            </form>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default HomePage;