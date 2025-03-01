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
      try {
        // 테스트용 더미 데이터 (실제 데이터가 없을 경우 사용)
        const dummyData = {
          birthDate: '1990년 1월 1일',
          birthTime: '9시 30분',
          gender: '남성',
          personality: '당신은 활발하고 긍정적인 성격을 가지고 있습니다. 사교성이 좋고 새로운 경험을 좋아하는 편입니다. 창의적인 사고방식으로 문제를 해결하는 능력이 뛰어나며, 타인과의 소통에 능숙합니다.',
          health: '전반적으로 건강한 편이나, 가끔 과로하는 경향이 있습니다. 규칙적인 운동과 충분한 휴식이 필요합니다. 특히 목과 어깨 부분에 무리가 가지 않도록 주의하세요.',
          wealth: '재물운은 꾸준히 상승하는 추세입니다. 안정적인 수입원이 생길 가능성이 높으며, 투자보다는 저축에 중점을 두는 것이 좋습니다. 하반기에 예상치 못한 수입이 생길 수 있습니다.',
          career: '현재 직업에서 성과를 인정받을 수 있는 시기입니다. 새로운 기회가 찾아올 수 있으니 주변 상황에 주의를 기울이세요. 인간관계에 신경 쓰면 더 좋은 결과를 얻을 수 있습니다.',
          relationship: '대인관계가 원만하며, 특히 이성 관계에서 좋은 인연을 만날 수 있습니다. 기존 관계는 더욱 깊어질 수 있으며, 싱글이라면 의미 있는 만남이 있을 수 있습니다.',
          yearlyFortune: [
            { period: '1월 - 3월', description: '새로운 시작에 좋은 기운이 함께합니다. 계획했던 일을 시작하기에 좋은 시기입니다.' },
            { period: '4월 - 6월', description: '안정적인 시기로, 꾸준히 노력하면 좋은 결과를 얻을 수 있습니다.' },
            { period: '7월 - 9월', description: '변화의 시기가 찾아올 수 있습니다. 유연하게 대처하는 것이 중요합니다.' },
            { period: '10월 - 12월', description: '한 해를 마무리하는 시기로, 성취감을 느낄 수 있습니다. 새로운 계획을 세우기 좋은 때입니다.' }
          ],
          luckyDirections: '동쪽, 남동쪽',
          luckyColors: '초록색, 파란색',
          luckyNumbers: '3, 7, 9'
        };
        
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
            // 오류 발생 시 더미 데이터 사용
            setResultData(dummyData);
            setTimeout(() => setLoading(false), 1500);
          }
        } else {
          // 데이터가 없을 경우 더미 데이터 사용 (실제 서비스에서는 분석 페이지로 리다이렉트)
          setResultData(dummyData);
          setTimeout(() => setLoading(false), 1500);
        }
      } catch (error) {
        console.error("데이터 로딩 오류:", error);
        // 오류 발생 시 더미 데이터 사용
        setResultData({
          birthDate: '1990년 1월 1일',
          birthTime: '9시 30분',
          gender: '남성',
          personality: '데이터 로딩 중 오류가 발생했습니다. 다시 시도해 주세요.',
          health: '데이터 로딩 중 오류가 발생했습니다.',
          wealth: '데이터 로딩 중 오류가 발생했습니다.',
          career: '데이터 로딩 중 오류가 발생했습니다.',
          relationship: '데이터 로딩 중 오류가 발생했습니다.',
          yearlyFortune: [],
          luckyDirections: '',
          luckyColors: '',
          luckyNumbers: ''
        });
        setTimeout(() => setLoading(false), 1500);
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
                    <span className="value">{resultData.birthDate || '정보 없음'}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">시간</span>
                    <span className="value">{resultData.birthTime || '미입력'}</span>
                  </div>
                  <div className="info-item">
                    <span className="label">성별</span>
                    <span className="value">{resultData.gender || '정보 없음'}</span>
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
                <p>{resultData.personality || '정보가 없습니다.'}</p>
              </div>

              <div className="analysis-section">
                <h2>건강 운세</h2>
                <p>{resultData.health || '정보가 없습니다.'}</p>
              </div>

              <div className="analysis-section">
                <h2>재물 운세</h2>
                <p>{resultData.wealth || '정보가 없습니다.'}</p>
              </div>

              <div className="analysis-section">
                <h2>사업/직업 운세</h2>
                <p>{resultData.career || '정보가 없습니다.'}</p>
              </div>

              <div className="analysis-section">
                <h2>연애/결혼 운세</h2>
                <p>{resultData.relationship || '정보가 없습니다.'}</p>
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

        .basic-info {
          margin-bottom: 40px;
        }

        h2 {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--text-color);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .value {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--text-color);
        }

        .analysis-section {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid var(--border-color);
        }

        .analysis-section p {
          font-size: 1rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .action-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 40px;
        }

        .btn-share,
        .btn-reanalyze,
        .btn-premium {
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-share {
          background-color: var(--bg-hover);
          color: var(--text-color);
          border: 1px solid var(--border-color);
        }

        .btn-reanalyze {
          background-color: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }

        .btn-premium {
          background-color: var(--primary-color);
          color: white;
          border: none;
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
          
          .action-buttons {
            flex-direction: column;
          }
          
          .btn-share,
          .btn-reanalyze,
          .btn-premium {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ResultsPage;