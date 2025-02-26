import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Result.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementCircle from '../components/ElementCircle';
import MonthlyFortune from '../components/MonthlyFortune';
import React.lazy from 'react';

// 차트 컴포넌트 지연 로딩으로 변경
const ElementDonut = React.lazy(() => import('../components/ElementDonut'));
const MonthlyChart = React.lazy(() => import('../components/MonthlyChart'));

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
  const [analyzing, setAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  // 보다 안전한 기본 데이터
  const defaultElementData = {
    wood: 20,
    fire: 20,
    earth: 20,
    metal: 20,
    water: 20
  };
  
  const defaultMonthlyData = [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50];
  
  // 데이터가 없을 때 처리
  useEffect(() => {
    console.log("Result 컴포넌트 마운트됨");
    
    try {
      // URL에서 파라미터 확인
      const params = new URLSearchParams(location.search);
      const sessionId = params.get('session');
      
      console.log("세션 ID:", sessionId);
      
      // 임시 데이터 생성 (진짜 API 연결 전까지 사용)
      const tempData = {
        name: "김** (30대 남성)",
        birthYear: 1990,
        birthMonth: 7,
        birthDay: 15,
        birthHour: null,
        summary: "열정적이고 적극적인 성격으로, 리더십이 뛰어나며 새로운 도전을 즐기는 편입니다. 창의적인 분야나 리더십을 발휘할 수 있는 직종에서 높은 성취를 이룰 수 있습니다. 2025년에는 특히 3-4월과 9월에 중요한 기회가 있을 것으로 보입니다.",
        elementData: {
          wood: 25,
          fire: 35,
          earth: 15,
          metal: 10,
          water: 15
        },
        monthlyData: [65, 70, 85, 80, 60, 45, 40, 55, 75, 70, 65, 60],
        careerFortune: "리더십과 창의성을 필요로 하는 직무에서 좋은 성과를 낼 수 있는 해입니다. 3-4월에 중요한 직업적 기회가 있을 것으로 보이며, 적극적으로 도전해보는 것이 좋습니다.",
        loveFortune: "대인관계에서 솔직하고 열정적인 에너지가 주변 사람들을 끌어당깁니다. 싱글이라면 하반기에 의미 있는 만남이 있을 수 있으며, 파트너가 있다면 더 깊은 관계로 발전할 수 있는 시기입니다.",
        wealthFortune: "재물운은 전반적으로 안정적이나, 감정에 따른 충동적인 지출에 주의해야 합니다. 9-10월에 수입이 증가할 가능성이 높으며, 장기적인 투자에 관심을 가져볼 만한 시기입니다.",
        relationshipFortune: "사회적 활동이 활발해지는 시기로, 넓은 인맥을 형성할 수 있습니다. 다만 간혹 지나친 열정으로 타인에게 부담을 줄 수 있으니 균형 있는 소통을 유지하는 것이 중요합니다."
      };
      
      // 프로그레스 바 시뮬레이션
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 5;
        setProgress(currentProgress);
        
        if (currentProgress >= 50) {
          setAnalyzing(false);
        }
        
        if (currentProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
            setResults(tempData);
          }, 500);
        }
      }, 200);
      
      return () => {
        clearInterval(interval);
      };
    } catch (err) {
      console.error("결과 로딩 중 오류 발생:", err);
      setError("결과를 불러오는 중 문제가 발생했습니다. 다시 시도해 주세요.");
      setLoading(false);
    }
  }, [location.search]);
  
  if (error) {
    return (
      <div className="result-page">
        <Header />
        <div className="error-container">
          <div className="error-message">
            <i className="fas fa-exclamation-triangle"></i>
            <h2>오류가 발생했습니다</h2>
            <p>{error}</p>
            <button onClick={() => navigate('/analysis')} className="retry-button">
              다시 시도하기
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (loading) {
    return (
      <div className="result-page">
        <Header />
        <div className="loading-container">
          <div className="loading-content">
            {analyzing ? (
              <>
                <h2>사주 분석 중...</h2>
                <p>당신의 사주를 AI가 분석하고 있습니다. 잠시만 기다려주세요.</p>
              </>
            ) : (
              <>
                <h2>분석 결과 생성 중...</h2>
                <p>거의 완료되었습니다. 조금만 더 기다려주세요.</p>
              </>
            )}
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="progress-text">{progress}%</p>
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
        <div className="result-header">
          <div className="user-profile">
            <div className="user-avatar">
              <i className="fas fa-user-circle"></i>
            </div>
            <div className="user-info">
              <h1>{results?.name || '사용자'}</h1>
              <p className="birth-info">
                {results?.birthYear || '----'}년 {results?.birthMonth || '--'}월 {results?.birthDay || '--'}일 {results?.birthHour ? `${results.birthHour}시` : ''}
              </p>
            </div>
          </div>
        </div>
        
        <div className="result-section main-section">
          <h2>종합 분석</h2>
          <p>{results?.summary || '분석 데이터를 불러올 수 없습니다.'}</p>
        </div>
        
        <div className="result-charts-container">
          <div className="result-charts">
            <div className="chart-card">
              <ErrorBoundary fallback={<ChartErrorFallback />}>
                <Suspense fallback={<LoadingFallback />}>
                  <ElementDonut elementData={results?.elementData || defaultElementData} />
                </Suspense>
              </ErrorBoundary>
            </div>
            <div className="chart-card">
              <ErrorBoundary fallback={<ChartErrorFallback />}>
                <Suspense fallback={<LoadingFallback />}>
                  <MonthlyChart monthlyData={results?.monthlyData || defaultMonthlyData} />
                </Suspense>
              </ErrorBoundary>
            </div>
          </div>
        </div>
        
        <div className="result-section detail-section">
          <h2>상세 분석</h2>
          <div className="detail-categories">
            <div className="detail-category">
              <h3><i className="fas fa-briefcase"></i> 직업운</h3>
              <p>{results?.careerFortune || '데이터를 불러올 수 없습니다.'}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-heart"></i> 애정운</h3>
              <p>{results?.loveFortune || '데이터를 불러올 수 없습니다.'}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-coins"></i> 재물운</h3>
              <p>{results?.wealthFortune || '데이터를 불러올 수 없습니다.'}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-user-friends"></i> 대인관계</h3>
              <p>{results?.relationshipFortune || '데이터를 불러올 수 없습니다.'}</p>
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
      
      <Footer />
    </div>
  );
};

export default Result; 