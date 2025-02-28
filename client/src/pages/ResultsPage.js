import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaShoppingCart, FaLock, FaInfoCircle, FaChartPie, FaChartLine, FaChartBar, FaCheck, FaStar, FaArrowRight, FaRegCreditCard } from 'react-icons/fa';
import '../styles/ResultPage.css';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, LineChart, Line } from 'recharts';

const ResultsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [premium, setPremium] = useState(false);
  
  // 결과 데이터 상태 관리
  const [resultData, setResultData] = useState(null);
  
  useEffect(() => {
    const loadData = async () => {
      // location.state에서 결과 확인
      if (location.state?.results) {
        setResultData(location.state.results);
        setTimeout(() => setLoading(false), 1500);
        return;
      }
      
      // localStorage에서 결과 확인
      const storedData = localStorage.getItem('sajuResult');
      if (storedData) {
        try {
          setResultData(JSON.parse(storedData));
          setTimeout(() => setLoading(false), 1500);
        } catch (error) {
          console.error("데이터 파싱 오류:", error);
          history.push('/');
        }
      } else {
        history.push('/');
      }
    };
    
    loadData();
  }, [location.state, history]);
  
  // 로딩 화면
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <h2>사주 분석 중...</h2>
        <p className="loading-text">당신의 운명을 분석하고 있습니다.</p>
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
        <p className="loading-detail">생년월일과 시간을 바탕으로 사주팔자를 계산하고<br />당신의 운세를 심층 분석하고 있습니다.</p>
      </div>
    );
  }
  
  // 결과 데이터가 없는 경우
  if (!resultData) {
    return null;
  }
  
  // 차트 데이터
  const elementData = [
    { name: '목(木)', value: 20, color: '#00b894' },
    { name: '화(火)', value: 25, color: '#e17055' },
    { name: '토(土)', value: 15, color: '#fdcb6e' },
    { name: '금(金)', value: 20, color: '#b2bec3' },
    { name: '수(水)', value: 20, color: '#0984e3' }
  ];
  
  const monthlyData = Array.from({ length: 12 }, (_, i) => ({
    month: `${i + 1}월`,
    운세지수: Math.floor(Math.random() * 40) + 60
  }));
  
  // 프리미엄 모달 토글
  const togglePremiumModal = () => {
    setShowPremiumModal(!showPremiumModal);
  };
  
  // 프리미엄 구매 처리
  const handlePremiumPurchase = () => {
    setLoading(true);
    setTimeout(() => {
      setPremium(true);
      setShowPremiumModal(false);
      setLoading(false);
    }, 1500);
  };
  
  // 결과 공유
  const handleShareResult = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: '내 사주 분석 결과 - 사주포춘',
          text: '나의 사주 분석 결과를 확인해보세요!',
          url: window.location.href
        });
      } catch (error) {
        console.error('공유 실패:', error);
      }
    } else {
      alert('공유 기능은 해당 브라우저에서 지원하지 않습니다.');
    }
  };

  return (
    <div className="results-page">
      <Header />
      
      <main>
        <section className="results-hero">
          <div className="container">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              사주 분석 결과
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              당신의 사주를 기반으로 한 상세 분석 결과입니다
            </motion.p>
          </div>
          <div className="hero-bg-overlay"></div>
        </section>

        <section className="results-content">
          <div className="container">
            <div className="results-card">
              <div className="basic-info">
                <h2>기본 정보</h2>
                <div className="info-grid">
                  <div className="info-item">
                    <span className="label">생년월일</span>
                    <span className="value">{resultData.birthDate}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">시간</span>
                    <span className="value">{resultData.birthTime || '미입력'}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">성별</span>
                    <span className="value">{resultData.gender}</span>
                  </div>
                </div>
              </div>

              <div className="charts-section">
                <h2>오행 분석</h2>
                <div className="charts-container">
                  <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={elementData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {elementData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="chart-wrapper">
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="운세지수" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              <div className="analysis-section">
                <h2>성격 및 기질</h2>
                <p>{resultData.personality}</p>
              </div>

              <div className="analysis-section">
                <h2>건강 운세</h2>
                <p>{resultData.health}</p>
              </div>

              <div className="analysis-section">
                <h2>재물 운세</h2>
                <p>{resultData.wealth}</p>
              </div>

              <div className="analysis-section">
                <h2>사업/직업 운세</h2>
                <p>{resultData.career}</p>
              </div>

              <div className="analysis-section">
                <h2>연애/결혼 운세</h2>
                <p>{resultData.relationship}</p>
              </div>

              <div className="action-buttons">
                <button className="btn-share" onClick={handleShareResult}>
                  <FaArrowRight /> 결과 공유하기
                </button>
                <button className="btn-reanalyze" onClick={() => history.push('/analysis')}>
                  다시 분석하기
                </button>
                <button className="btn-premium" onClick={togglePremiumModal}>
                  <FaStar /> 프리미엄 분석 받기
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showPremiumModal && (
        <div className="premium-modal">
          <div className="modal-content">
            <h2>프리미엄 분석</h2>
            <p>더 자세한 사주 분석과 운세를 확인해보세요!</p>
            <ul>
              <li><FaCheck /> 10년 대운 분석</li>
              <li><FaCheck /> 월별 상세 운세</li>
              <li><FaCheck /> 사업/투자 길일</li>
              <li><FaCheck /> 궁합 심층 분석</li>
            </ul>
            <button className="btn-purchase" onClick={handlePremiumPurchase}>
              <FaRegCreditCard /> 프리미엄 구매하기
            </button>
            <button className="btn-close" onClick={togglePremiumModal}>
              닫기
            </button>
          </div>
        </div>
      )}

      <Footer />

      <style jsx>{`
        .results-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }

        .loading-container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background-color: var(--bg-color);
          color: var(--text-color);
        }

        .loading-spinner {
          width: 50px;
          height: 50px;
          border: 5px solid var(--bg-hover);
          border-top: 5px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 20px;
        }

        .loading-progress {
          width: 200px;
          height: 4px;
          background-color: var(--bg-hover);
          border-radius: 2px;
          margin: 20px 0;
          overflow: hidden;
        }

        .progress-bar {
          width: 100%;
          height: 100%;
          background-color: var(--primary-color);
          animation: progress 2s ease-in-out infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .results-hero {
          position: relative;
          padding: 80px 0;
          text-align: center;
          background-color: var(--primary-color);
          color: white;
          margin-bottom: 60px;
          overflow: hidden;
        }

        .hero-bg-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(142, 68, 173, 0.8), rgba(41, 128, 185, 0.8));
          z-index: 0;
        }

        .results-content {
          padding: 0 0 80px;
        }

        .results-card {
          max-width: 800px;
          margin: 0 auto;
          background-color: var(--card-bg);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        .charts-section {
          margin-bottom: 40px;
        }

        .charts-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }

        .chart-wrapper {
          background-color: var(--bg-hover);
          border-radius: 10px;
          padding: 20px;
        }

        .premium-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background-color: var(--card-bg);
          padding: 40px;
          border-radius: 15px;
          max-width: 500px;
          width: 90%;
        }

        .modal-content h2 {
          margin-bottom: 20px;
        }

        .modal-content ul {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .modal-content li {
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-purchase {
          width: 100%;
          padding: 15px;
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-close {
          width: 100%;
          padding: 15px;
          background-color: transparent;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          color: var(--text-color);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .results-hero {
            padding: 60px 0;
          }

          .results-card {
            padding: 20px;
          }

          .charts-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;