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
  
  // 데이터가 없을 때 처리
  useEffect(() => {
    if (!location.state || !location.state.userData) {
      navigate('/analysis', { replace: true });
      return;
    }
    
    const userData = location.state.userData;
    
    // 분석 진행 시뮬레이션 - 실제로는 서버 API 호출로 대체됨
    const simulateAnalysis = () => {
      // 프로그레스 바 애니메이션
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            return 100;
          }
          return prev + 1;
        });
      }, 50);
      
      // 분석 단계 메시지 변경
      setTimeout(() => {
        setAnalyzing(false);
        
        // 더미 결과 데이터
        setTimeout(() => {
          setResults({
            name: userData.name || '사용자',
            birthdate: `${userData.year}년 ${userData.month}월 ${userData.day}일 ${userData.hour || ''}시`,
            elementData: {
              wood: 25,
              fire: 35,
              earth: 15,
              metal: 10,
              water: 15
            },
            monthlyData: [
              { month: "1월", content: "새로운 시작의 달입니다.", rating: 4 },
              { month: "2월", content: "인간관계에 주의가 필요합니다.", rating: 3 },
              { month: "3월", content: "금전운이 상승합니다.", rating: 5 },
              { month: "4월", content: "건강에 유의하세요.", rating: 2 },
              { month: "5월", content: "여행이 좋은 시기입니다.", rating: 4 },
              { month: "6월", content: "학업과 시험에 유리합니다.", rating: 3 },
              { month: "7월", content: "가족과의 화합이 중요합니다.", rating: 4 },
              { month: "8월", content: "투자에 조심하세요.", rating: 2 },
              { month: "9월", content: "창의력이 빛나는 시기입니다.", rating: 5 },
              { month: "10월", content: "새로운 기회가 옵니다.", rating: 4 },
              { month: "11월", content: "휴식이 필요한 시기입니다.", rating: 3 },
              { month: "12월", content: "한 해를 잘 마무리하세요.", rating: 4 }
            ],
            summary: "열정적이고 적극적인 성격으로, 리더십이 뛰어나며 새로운 도전을 즐기는 편입니다. 창의적인 분야나 자신의 아이디어를 펼칠 수 있는 직업이 적합합니다. 대인관계에서는 솔직하고 직설적인 소통을 선호하며, 주변 사람들에게 많은 영향을 줄 수 있습니다. 건강 관리에 신경 쓰고, 내적 평화를 찾는 활동도 함께 병행하는 것이 좋습니다.",
            detailAnalysis: "2025년에는 특히 3~4월과 9월에 중요한 기회가 있을 것으로 예상됩니다."
          });
          
          setLoading(false);
        }, 1000);
      }, 3000);
      
      return () => clearInterval(progressInterval);
    };
    
    simulateAnalysis();
  }, [location, navigate]);
  
  if (loading) {
    return (
      <div className="result-page">
        <Header />
        
        <div className="result-content loading">
          <div className="loading-overlay">
            <div className="loading-container">
              <div className="loading-animation">
                <div className="spinner"></div>
              </div>
              <h2 className="loading-text">
                {analyzing ? "AI가 사주를 분석 중입니다..." : "결과를 생성하고 있습니다..."}
              </h2>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <p className="progress-text">{progress}% 완료</p>
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
        </div>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="result-page">
      <Header />
      
      <div className="result-content">
        <div className="container">
          <div className="result-header">
            <h1>사주 분석 결과</h1>
            <p className="birth-info">{results.birthdate}</p>
          </div>
          
          <div className="result-section summary-section">
            <h2>종합 분석</h2>
            <p>{results.summary}</p>
          </div>
          
          <div className="result-charts">
            <div className="chart-container">
              <ElementChart elementData={results.elementData} />
            </div>
            <div className="chart-container">
              <MonthlyFortune monthlyData={results.monthlyData} />
            </div>
          </div>
          
          <div className="result-section detail-section">
            <h2>상세 분석</h2>
            <p>{results.detailAnalysis}</p>
          </div>
          
          <div className="result-actions">
            <button className="share-button">
              <i className="fas fa-share-alt"></i> 공유하기
            </button>
            <button className="save-button">
              <i className="fas fa-download"></i> 저장하기
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Result; 