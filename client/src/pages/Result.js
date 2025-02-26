import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/Result.css';

const Result = ({ resultData, userData }) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);
  
  // 데이터가 없으면 분석 페이지로 리다이렉트
  useEffect(() => {
    if (!resultData || !userData) {
      history.push('/analysis');
    }
  }, [resultData, userData, history]);
  
  // 결과가 없을 경우 로딩 표시
  if (!resultData || !userData) {
    return (
      <div className="loading-container">
        <div className="loading-animation">
          <div className="spinner"></div>
        </div>
        <p>분석 결과를 불러오는 중입니다...</p>
      </div>
    );
  }
  
  // 결과 공유하기
  const handleShare = async () => {
    setIsLoading(true);
    
    try {
      // 실제로는 API를 호출하여 결과를 저장하고 공유 URL을 받아옴
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 더미 URL 생성
      const dummyShareId = Math.random().toString(36).substring(2, 10);
      const url = `${window.location.origin}/shared/${dummyShareId}`;
      setShareUrl(url);
      setIsLoading(false);
    } catch (error) {
      console.error('공유 URL 생성 중 오류:', error);
      alert('공유 URL을 생성하는 중 오류가 발생했습니다.');
      setIsLoading(false);
    }
  };
  
  // URL 복사하기
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };
  
  return (
    <div className="result-page">
      <Header />
      
      <div className="result-container">
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
          {!shareUrl ? (
            <button 
              className="share-button" 
              onClick={handleShare}
              disabled={isLoading}
            >
              {isLoading ? '생성 중...' : '결과 공유하기'}
            </button>
          ) : (
            <div className="share-url-container">
              <input 
                type="text" 
                value={shareUrl} 
                readOnly 
                className="share-url-input"
              />
              <button 
                className="copy-button"
                onClick={copyToClipboard}
              >
                {copied ? '복사됨!' : '복사'}
              </button>
            </div>
          )}
          
          <Link to="/premium" className="premium-link">
            더 상세한 분석이 필요하신가요? 프리미엄 서비스 알아보기
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Result; 