import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Result.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementCircle from '../components/ElementCircle';
import MonthlyFortune from '../components/MonthlyFortune';

const OtherResultView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sharedBy, setSharedBy] = useState('친구');

  useEffect(() => {
    // API 호출 대신 데이터 가져오기 시뮬레이션
    setTimeout(() => {
      try {
        // 예시 데이터
        const dummyResults = {
          userName: '김철수',
          birthdate: '1988-12-25 09:15',
          gender: '남성',
          mainFortune: '당신은 창의적이고 리더십이 강한 성향을 가지고 있습니다. 2023년은 새로운 도전과 기회의 해가 될 것입니다. 특히 3월과 9월에 중요한 결정을 내릴 기회가 있으니 주의 깊게 살펴보세요.',
          elements: {
            wood: 35,
            fire: 25,
            earth: 15,
            metal: 10,
            water: 15
          },
          monthlyFortune: [70, 65, 85, 80, 60, 50, 55, 65, 85, 75, 60, 55],
          careerFortune: '올해는 직업적 변화가 예상됩니다. 새로운 기회에 대해 열린 마음을 가지는 것이 중요합니다. 특히 창의적인 분야나 리더십을 발휘할 수 있는 역할에서 좋은 성과를 낼 수 있습니다.',
          wealthFortune: '재정적으로는 안정적인 한 해가 될 것입니다. 다만, 6월과 7월에는 큰 지출을 피하는 것이 좋습니다. 투자를 고려한다면 장기적 관점에서 보수적인 접근이 유리합니다.',
          healthFortune: '전반적인 건강은 양호하나, 스트레스 관리에 주의가 필요합니다. 규칙적인 운동과 충분한 휴식으로 정신적, 신체적 균형을 유지하세요. 특히 소화기관 건강에 신경 쓰는 것이 좋습니다.',
          relationshipFortune: '대인관계에서는 소통의 중요성이 더욱 커집니다. 가족과의 유대를 강화하는 것이 행운을 가져올 것입니다. 새로운 만남은 7월과 10월에 특히 의미 있는 인연이 될 가능성이 높습니다.'
        };
        
        setResults(dummyResults);
        setLoading(false);
      } catch (err) {
        setError('결과를 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      }
    }, 1500);
  }, [id]);

  if (loading) {
    return (
      <div className="result-page">
        <Header />
        <div className="loading-overlay">
          <div className="loading-container">
            <div className="loading-animation">
              <div className="spinner"></div>
            </div>
            <h2 className="loading-text">공유된 사주 분석 결과를 불러오는 중입니다...</h2>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: '90%' }}></div>
            </div>
            <p className="progress-text">잠시만 기다려주세요...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="result-page">
        <Header />
        <div className="result-content">
          <div className="error-container">
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              <h2>결과를 불러올 수 없습니다</h2>
              <p>{error}</p>
              <button className="retry-button" onClick={() => navigate('/dashboard')}>
                <i className="fas fa-home"></i> 홈으로 돌아가기
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="result-page">
      <Header />
      <div className="result-content">
        <div className="shared-result-banner">
          <div className="shared-info">
            <i className="fas fa-share-alt"></i>
            <p><strong>{sharedBy}</strong>님이 공유한 사주 분석 결과입니다</p>
          </div>
          <button className="analyze-button" onClick={() => navigate('/analysis')}>
            <i className="fas fa-magic"></i> 나의 사주 분석하기
          </button>
        </div>
        
        <div className="result-header">
          <div className="user-profile shared-profile">
            <div className="user-avatar">
              <i className="fas fa-user"></i>
            </div>
            <div className="user-info">
              <h1>{results.userName}님의 사주 분석 결과</h1>
              <p className="user-birth">
                <i className="fas fa-calendar-alt"></i> {results.birthdate} ({results.gender})
              </p>
            </div>
          </div>
        </div>
        
        <div className="result-section main-section">
          <h2>종합 운세</h2>
          <p>{results.mainFortune}</p>
        </div>
        
        <div className="result-charts">
          <div className="chart-card">
            <ElementCircle elementData={results.elements} />
          </div>
          <div className="chart-card">
            <MonthlyFortune monthlyData={results.monthlyFortune} />
          </div>
        </div>
        
        <div className="detail-section">
          <h2>상세 분석 결과</h2>
          <div className="detail-categories">
            <div className="detail-category">
              <h3><i className="fas fa-briefcase"></i> 직업/진로</h3>
              <p>{results.careerFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-coins"></i> 재물/금전</h3>
              <p>{results.wealthFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-heartbeat"></i> 건강</h3>
              <p>{results.healthFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-users"></i> 인간관계</h3>
              <p>{results.relationshipFortune}</p>
            </div>
          </div>
        </div>
        
        <div className="result-actions">
          <button className="analyze-button" onClick={() => navigate('/analysis')}>
            <i className="fas fa-magic"></i> 나도 분석받기
          </button>
          <button className="premium-button" onClick={() => navigate('/premium')}>
            <i className="fas fa-crown"></i> 프리미엄 서비스 보기
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OtherResultView; 