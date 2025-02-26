import React, { useState, useEffect, Suspense, lazy } from 'react';
import { useHistory } from 'react-router-dom';
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

const Result = ({ resultData, userData }) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // 결과 데이터가 없는 경우 홈으로 리다이렉트
    if (!resultData || !userData) {
      history.push('/');
      return;
    }
    
    try {
      // 프로그레스 바 시뮬레이션
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          
          // 분석 결과 설정
          setResults({
            userName: userData.name || '게스트',
            birthdate: userData.birthDate || '2000-01-01',
            gender: userData.gender || '남성',
            sajuResult: resultData
          });
          
          setLoading(false);
        }
      }, 50);
      
      return () => {
        clearInterval(interval);
      };
    } catch (err) {
      console.error('Error loading results:', err);
      setError('결과를 불러오는 중 오류가 발생했습니다.');
      setLoading(false);
    }
  }, [resultData, userData, history]);

  // 에러 UI
  if (error) {
    return (
      <div className="result-page">
        <Header type="result" />
        <div className="result-content">
          <div className="error-container">
            <div className="error-message">
              <i className="fas fa-exclamation-circle"></i>
              <h2>결과를 불러올 수 없습니다</h2>
              <p>{error}</p>
              <button className="retry-button" onClick={() => history.push('/')}>
                <i className="fas fa-home"></i> 홈으로 돌아가기
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // 로딩 UI
  if (loading) {
    return (
      <div className="result-page">
        <Header type="result" />
        <div className="loading-container">
          <h2>사주 분석 결과 준비 중...</h2>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{progress}% 완료</p>
        </div>
        <Footer />
      </div>
    );
  }

  // 결과 UI
  return (
    <div className="result-page">
      <Header type="result" />
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
          <p>{results.sajuResult.mainFortune}</p>
        </div>
        
        <div className="result-charts">
          <div className="chart-card">
            <ElementCircle elementData={results.sajuResult.elements} />
          </div>
          <div className="chart-card">
            <MonthlyFortune monthlyData={results.sajuResult.monthlyFortune} />
          </div>
        </div>
        
        <div className="detail-section">
          <h2>상세 분석 결과</h2>
          <div className="detail-categories">
            <div className="detail-category">
              <h3><i className="fas fa-briefcase"></i> 직업/진로</h3>
              <p>{results.sajuResult.careerFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-coins"></i> 재물/금전</h3>
              <p>{results.sajuResult.wealthFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-heartbeat"></i> 건강</h3>
              <p>{results.sajuResult.healthFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-users"></i> 인간관계</h3>
              <p>{results.sajuResult.relationshipFortune}</p>
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
          <button className="analyze-button" onClick={() => history.push('/')}>
            <i className="fas fa-redo"></i> 다시 분석하기
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Result; 