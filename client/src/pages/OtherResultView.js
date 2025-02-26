import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../styles/Result.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementCircle from '../components/ElementCircle';
import MonthlyFortune from '../components/MonthlyFortune';

const OtherResultView = () => {
  const { id } = useParams();
  const [resultData, setResultData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchSharedResult = async () => {
      try {
        // 실제로는 API 호출로 데이터 가져오기
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 더미 데이터 (실제로는 API 응답)
        const dummyResult = {
          mainFortune: '창의적이고 리더십이 강한 성향을 가지고 있습니다. 2023년은 새로운 도전과 기회의 해가 될 것입니다. 특히 3월과 9월에 중요한 결정을 내릴 기회가 있으니 주의 깊게 살펴보세요.',
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
        
        const dummyUserData = {
          name: '김민준',
          birthDate: '1988-03-15',
          birthTime: '09:30',
          gender: '남성'
        };
        
        setResultData(dummyResult);
        setUserData(dummyUserData);
        setLoading(false);
      } catch (err) {
        console.error('결과 로딩 중 오류:', err);
        setError('결과를 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      }
    };
    
    fetchSharedResult();
  }, [id]);
  
  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-animation">
          <div className="spinner"></div>
        </div>
        <p>공유된 결과를 불러오는 중입니다...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="error-container">
        <h2>오류 발생</h2>
        <p>{error}</p>
        <Link to="/" className="home-link">홈으로 돌아가기</Link>
      </div>
    );
  }
  
  return (
    <div className="result-page">
      <Header />
      
      <div className="result-container">
        <div className="shared-result-banner">
          <div className="shared-info">
            <i className="fas fa-share-alt"></i>
            <p>다른 사용자가 공유한 사주 분석 결과입니다</p>
          </div>
          <Link to="/analysis" className="primary-button">내 사주 분석하기</Link>
        </div>
        
        <div className="result-header">
          <h1>{userData.name}님의 사주 분석 결과</h1>
          <p>생년월일: {userData.birthDate} {userData.birthTime}</p>
        </div>
        
        <div className="result-card main-result">
          <h2>종합 운세</h2>
          <p>{resultData.mainFortune}</p>
        </div>
        
        <div className="result-grid">
          <div className="result-card">
            <h2>오행 분석</h2>
            <div className="elements-chart">
              {Object.entries(resultData.elements).map(([element, value]) => (
                <div key={element} className="element-bar">
                  <div className="element-label">
                    {element === 'wood' && '목(木)'}
                    {element === 'fire' && '화(火)'}
                    {element === 'earth' && '토(土)'}
                    {element === 'metal' && '금(金)'}
                    {element === 'water' && '수(水)'}
                  </div>
                  <div className="element-bar-outer">
                    <div 
                      className={`element-bar-inner ${element}`} 
                      style={{ width: `${value}%` }}
                    ></div>
                  </div>
                  <div className="element-value">{value}%</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="result-card">
            <h2>월별 운세 흐름</h2>
            <div className="monthly-chart">
              <div className="chart-bars">
                {resultData.monthlyFortune.map((value, index) => (
                  <div 
                    key={index} 
                    className="monthly-bar"
                    style={{ height: `${value}%` }}
                    title={`${index + 1}월: ${value}점`}
                  >
                    <div className="monthly-value">{value}</div>
                  </div>
                ))}
              </div>
              <div className="chart-months">
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="month-label">{i + 1}월</div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="result-details">
          <div className="result-card">
            <h2><i className="fas fa-briefcase"></i> 직업/사업 운세</h2>
            <p>{resultData.careerFortune}</p>
          </div>
          
          <div className="result-card">
            <h2><i className="fas fa-coins"></i> 재물/금전 운세</h2>
            <p>{resultData.wealthFortune}</p>
          </div>
          
          <div className="result-card">
            <h2><i className="fas fa-heartbeat"></i> 건강 운세</h2>
            <p>{resultData.healthFortune}</p>
          </div>
          
          <div className="result-card">
            <h2><i className="fas fa-user-friends"></i> 인간관계/연애 운세</h2>
            <p>{resultData.relationshipFortune}</p>
          </div>
        </div>
        
        <div className="result-actions">
          <Link to="/analysis" className="primary-button">
            <i className="fas fa-magic"></i> 내 사주 분석하기
          </Link>
          <Link to="/premium" className="premium-link">
            더 상세한 분석이 필요하신가요? 프리미엄 서비스 알아보기
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OtherResultView; 