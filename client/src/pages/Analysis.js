import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Analysis.css';

const Analysis = ({ setResultData, setUserData }) => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    gender: '남성',
    concerns: []
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleConcernToggle = (concern) => {
    setFormData(prev => {
      const concerns = [...prev.concerns];
      if (concerns.includes(concern)) {
        return { ...prev, concerns: concerns.filter(c => c !== concern) };
      } else {
        return { ...prev, concerns: [...concerns, concern] };
      }
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 실제 API 호출 대신 더미 데이터 사용
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 더미 결과 데이터
      const dummyResult = {
        mainFortune: '당신은 창의적이고 리더십이 강한 성향을 가지고 있습니다. 2023년은 새로운 도전과 기회의 해가 될 것입니다. 특히 3월과 9월에 중요한 결정을 내릴 기회가 있으니 주의 깊게 살펴보세요.',
        elements: {
          wood: 30,
          fire: 20,
          earth: 15,
          metal: 25,
          water: 10
        },
        monthlyFortune: [60, 65, 80, 75, 65, 55, 60, 70, 85, 75, 65, 60],
        careerFortune: '직업적으로 안정적인 시기입니다. 현재 진행 중인 프로젝트에 집중하면 좋은 결과를 얻을 수 있습니다. 다만, 새로운 도전에 대한 두려움을 극복하는 것이 중요합니다.',
        wealthFortune: '재정적으로 약간의 어려움이 있을 수 있지만, 계획적인 소비와 투자로 극복할 수 있습니다. 5월과 11월에 예상치 못한 수입이 있을 수 있으니 기회를 놓치지 마세요.',
        healthFortune: '전반적인 건강은 양호하나, 과로와 스트레스에 주의하세요. 규칙적인 운동과 충분한 휴식이 필요합니다. 특히 소화기관 건강에 신경 쓰는 것이 좋습니다.',
        relationshipFortune: '대인관계에서 소통의 중요성이 커집니다. 특히 가족과의 관계 개선에 노력하면 좋은 결과가 있을 것입니다. 7월경에 중요한 인연을 만날 가능성이 있습니다.'
      };
      
      // 상태 업데이트
      setUserData(formData);
      setResultData(dummyResult);
      
      // 결과 페이지로 이동
      history.push('/result');
    } catch (error) {
      console.error('분석 중 오류 발생:', error);
      alert('분석 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) {
    return (
      <div className="analysis-page">
        <Header type="result" />
        <div className="loading-container">
          <h2>사주 분석 중...</h2>
          <div className="loading-animation">
            <div className="spinner"></div>
          </div>
          <p>정확한 분석을 위해 잠시만 기다려주세요</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="analysis-page">
      <Header />
      <div className="analysis-container">
        <div className="analysis-header">
          <h1>사주 분석</h1>
          <p>정확한 분석을 위해 아래 정보를 입력해주세요</p>
        </div>
        
        <form className="analysis-form" onSubmit={handleSubmit}>
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
            <label htmlFor="birthTime">태어난 시간</label>
            <input 
              type="time" 
              id="birthTime" 
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
              required
            />
            <small>정확한 시간을 모르시면 12:00으로 입력해주세요</small>
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
                <span>남성</span>
              </label>
              <label className="radio-label">
                <input 
                  type="radio" 
                  name="gender"
                  value="여성"
                  checked={formData.gender === '여성'}
                  onChange={handleChange}
                />
                <span>여성</span>
              </label>
            </div>
          </div>
          
          <div className="form-group">
            <label>관심 분야 (복수 선택 가능)</label>
            <div className="concerns-group">
              {['건강', '재물', '직업', '사랑', '가족', '학업'].map(concern => (
                <label key={concern} className="concern-label">
                  <input 
                    type="checkbox"
                    checked={formData.concerns.includes(concern)}
                    onChange={() => handleConcernToggle(concern)}
                  />
                  <span>{concern}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="submit-button">
              <i className="fas fa-magic"></i> 사주 분석하기
            </button>
          </div>
          
          <div className="form-disclaimer">
            <p>
              * 입력하신 정보는 사주 분석을 위해서만 사용되며, 분석 완료 후 자동으로 삭제됩니다.
              <br />개인정보 처리방침은 <a href="/privacy">여기</a>에서 확인하실 수 있습니다.
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Analysis; 