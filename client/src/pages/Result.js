import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Result.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementCircle from '../components/ElementCircle';
import MonthlyFortune from '../components/MonthlyFortune';

// 차트 컴포넌트 지연 로딩으로 변경
const ElementDonut = lazy(() => import('../components/ElementDonut'));
const MonthlyChart = lazy(() => import('../components/MonthlyChart'));

// 오류 경계 컴포넌트
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// 로딩 컴포넌트
const LoadingFallback = () => (
  <div className="chart-loading">
    <div className="spinner"></div>
    <p>차트를 불러오는 중...</p>
  </div>
);

// 오류 발생 시 표시할 컴포넌트
const ChartErrorFallback = () => (
  <div className="chart-error">
    <i className="fas fa-exclamation-circle"></i>
    <p>차트를 불러올 수 없습니다. 잠시 후 다시 시도해주세요.</p>
  </div>
);

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    try {
      // 브라우저가 결과 컴포넌트를 미리 준비하도록 시간을 줌
      setTimeout(() => {
        // 프로그레스 바 시뮬레이션
        let currentProgress = 0;
        const interval = setInterval(() => {
          currentProgress += 5;
          setProgress(currentProgress);
          
          if (currentProgress >= 100) {
            clearInterval(interval);
            
            // 분석 결과 데이터 설정 (실제로는 API 응답으로 받아옵니다)
            const userData = location.state?.userData || {
              name: '홍길동',
              birthdate: '1990-05-15 08:30',
              gender: '남성'
            };
            
            // 분석 결과 예시 데이터
            const resultData = {
              userName: userData.name,
              birthdate: userData.birthdate,
              gender: userData.gender,
              mainFortune: '당신은 창의적이고 리더십이 강한 성향을 가지고 있습니다. 2023년은 새로운 도전과 기회의 해가 될 것입니다. 특히 3월과 9월에 중요한 결정을 내릴 기회가 있으니 주의 깊게 살펴보세요.',
              elements: {
                wood: 30,
                fire: 25,
                earth: 15,
                metal: 20,
                water: 10
              },
              monthlyFortune: [65, 70, 85, 75, 60, 50, 55, 70, 85, 80, 65, 60],
              careerFortune: '올해는 직업적 변화가 예상됩니다. 새로운 기회에 대해 열린 마음을 가지는 것이 중요합니다. 특히 창의적인 분야나 리더십을 발휘할 수 있는 역할에서 좋은 성과를 낼 수 있습니다.',
              wealthFortune: '재정적으로는 안정적인 한 해가 될 것입니다. 다만, 6월과 7월에는 큰 지출을 피하는 것이 좋습니다. 투자를 고려한다면 장기적 관점에서 보수적인 접근이 유리합니다.',
              healthFortune: '전반적인 건강은 양호하나, 스트레스 관리에 주의가 필요합니다. 규칙적인 운동과 충분한 휴식으로 정신적, 신체적 균형을 유지하세요. 특히 소화기관 건강에 신경 쓰는 것이 좋습니다.',
              relationshipFortune: '대인관계에서는 소통의 중요성이 더욱 커집니다. 가족과의 유대를 강화하는 것이 행운을 가져올 것입니다. 새로운 만남은 7월과 10월에 특히 의미 있는 인연이 될 가능성이 높습니다.'
            };
            
            setResults(resultData);
            setLoading(false);
          }
        }, 200);
      }, 1000); // 1초 지연으로 브라우저가 렌더링 준비할 시간을 줌
      
      return () => {
        // 컴포넌트가 언마운트될 때 모든 타이머 정리
        console.log("Result 컴포넌트 언마운트됨");
      };
    } catch (err) {
      console.error('Error loading results:', err);
      setError('결과를 불러오는 중 오류가 발생했습니다.');
      setLoading(false);
    }
  }, [location.state]);
  
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
              <button className="retry-button" onClick={() => navigate('/analysis')}>
                <i className="fas fa-redo"></i> 다시 시도하기
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
      
      {loading ? (
        <div className="loading-overlay">
          <div className="loading-container">
            <div className="loading-animation">
              <div className="spinner"></div>
            </div>
            <h2 className="loading-text">사주 분석 중입니다...</h2>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{width: `${progress}%`}}></div>
            </div>
            <p className="progress-text">{progress}% 완료</p>
          </div>
        </div>
      ) : (
        <div className="result-content">
          <div className="result-header">
            <div className="user-profile">
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
            <button className="share-button">
              <i className="fas fa-share-alt"></i> 결과 공유하기
            </button>
            <button className="save-button">
              <i className="fas fa-download"></i> PDF로 저장하기
            </button>
            <button className="analyze-button" onClick={() => navigate('/analysis')}>
              <i className="fas fa-redo"></i> 다시 분석하기
            </button>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Result; 