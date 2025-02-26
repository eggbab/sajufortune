import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Result.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementChart from '../components/ElementChart';
import MonthlyFortune from '../components/MonthlyFortune';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [analyzing, setAnalyzing] = useState(true);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  
  // 데이터가 없을 때 처리
  useEffect(() => {
    console.log("Result 컴포넌트 마운트됨");
    
    // URL에서 파라미터 확인
    const params = new URLSearchParams(location.search);
    const sessionId = params.get('session');
    
    console.log("세션 ID:", sessionId);
    
    if (!sessionId) {
      console.log("세션 ID가 없음, 임시 데이터 사용");
      
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
      
      return () => clearInterval(interval);
    }
    
    // API 호출 시뮬레이션
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
    
    return () => clearInterval(interval);
    
    // 실제 API 호출 코드는 아래와 같이 작성할 수 있습니다
    /*
    const fetchResults = async () => {
      try {
        setLoading(true);
        
        // 진행상황 업데이트를 위한 인터벌
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
          currentProgress += 2;
          if (currentProgress > 95) {
            clearInterval(progressInterval);
          } else {
            setProgress(currentProgress);
          }
          
          if (currentProgress >= 50) {
            setAnalyzing(false);
          }
        }, 300);
        
        // API 호출
        const response = await fetch(`/api/results/${sessionId}`);
        
        if (!response.ok) {
          throw new Error('결과를 불러오는데 실패했습니다');
        }
        
        const data = await response.json();
        
        // 로딩 완료
        clearInterval(progressInterval);
        setProgress(100);
        
        setTimeout(() => {
          setResults(data);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error('에러 발생:', err);
        setError(err.message);
        setLoading(false);
      }
    };
    
    fetchResults();
    */
  }, [location, navigate]);
  
  // 오류가 있을 경우 에러 화면 표시
  if (error) {
    return (
      <div className="result-page">
        <Header />
        <div className="error-container">
          <h2>오류가 발생했습니다</h2>
          <p>{error}</p>
          <button 
            className="retry-button"
            onClick={() => navigate('/analysis')}
          >
            다시 시도하기
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // 로딩 화면
  if (loading) {
    return (
      <div className="result-page">
        <Header />
        
        <div className="loading-overlay">
          <div className="loading-container">
            <div className="loading-animation">
              <div className="spinner"></div>
            </div>
            <h2 className="loading-text">사주 분석 중...</h2>
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="progress-text">{progress}% 완료</p>
            <p className="analysis-text">{analyzing ? "AI가 사주를 분석 중입니다..." : "결과를 생성하고 있습니다..."}</p>
          </div>
        </div>
        
        {/* 흐릿하게 보이는 백그라운드 결과 */}
        <div className="blurred-background">
          <div className="container">
            <div className="result-header">
              <h1>사주 분석 결과</h1>
              <p className="birth-info">1990년 7월 15일</p>
            </div>
            
            <div className="result-section summary-section">
              <h2>종합 분석</h2>
              <p>열정적이고 적극적인 성격으로, 리더십이 뛰어나며 새로운 도전을 즐기는 편입니다. 창의적인 분야나 자신의 아이디어를 펼칠 수 있는 직업이 적합합니다...</p>
            </div>
            
            <div className="result-charts">
              <div className="chart-container">
                {/* 오행 차트 자리 */}
                <div className="placeholder-chart"></div>
              </div>
              <div className="chart-container">
                {/* 운세 흐름 차트 자리 */}
                <div className="placeholder-chart"></div>
              </div>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
  
  // 결과가 없는 경우 처리
  if (!results) {
    return (
      <div className="result-page">
        <Header />
        <div className="no-results-container">
          <h2>결과를 찾을 수 없습니다</h2>
          <p>사주 분석을 다시 시도해주세요.</p>
          <button 
            className="retry-button"
            onClick={() => navigate('/analysis')}
          >
            분석 페이지로 이동
          </button>
        </div>
        <Footer />
      </div>
    );
  }
  
  // 결과 화면
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
                {results?.birthYear}년 {results?.birthMonth}월 {results?.birthDay}일 {results?.birthHour ? `${results.birthHour}시` : ''}
              </p>
            </div>
          </div>
        </div>
        
        <div className="result-section main-section">
          <h2>종합 분석</h2>
          <p>{results?.summary}</p>
        </div>
        
        <div className="result-charts-container">
          <div className="result-charts">
            <div className="chart-card">
              <ElementChart elementData={results?.elementData} />
            </div>
            <div className="chart-card">
              <MonthlyFortune monthlyData={results?.monthlyData} />
            </div>
          </div>
        </div>
        
        <div className="result-section detail-section">
          <h2>상세 분석</h2>
          <div className="detail-categories">
            <div className="detail-category">
              <h3><i className="fas fa-briefcase"></i> 직업운</h3>
              <p>{results?.careerFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-heart"></i> 애정운</h3>
              <p>{results?.loveFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-coins"></i> 재물운</h3>
              <p>{results?.wealthFortune}</p>
            </div>
            <div className="detail-category">
              <h3><i className="fas fa-user-friends"></i> 대인관계</h3>
              <p>{results?.relationshipFortune}</p>
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