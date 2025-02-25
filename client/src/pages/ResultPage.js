import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ElementChart from '../components/ElementChart';
import '../styles/ResultPage.css';

function ResultPage() {
  const history = useHistory();
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  
  // location.state에서 데이터 추출
  const userData = location.state?.userData || null;
  const sajuResult = location.state?.sajuResult || null;
  
  // 데이터가 없으면 홈페이지로 리디렉션
  React.useEffect(() => {
    if (!userData || !sajuResult) {
      history.replace('/');
    }
  }, [userData, sajuResult, history]);
  
  if (!userData || !sajuResult) {
    return <div>로딩 중...</div>;
  }
  
  const handleBuyTalisman = () => {
    history.push({
      pathname: '/payment',
      state: { 
        userData,
        sajuResult,
        talisman: {
          type: sajuResult.dominantElement,
          price: 5000
        }
      }
    });
  };
  
  const handleShareResult = () => {
    navigator.clipboard.writeText(
      `사주포춘에서 받은 나의 사주 해석!\n` +
      `주요 원소: ${sajuResult.dominantElement}\n` +
      `오늘의 조언: ${sajuResult.todayAdvice}\n` +
      `당신도 무료로 받아보세요: https://sajufortune.kr`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="result-page-container">
      <Header />
      
      <main className="result-content">
        <div className="result-header">
          <h1 className="result-title">{userData.name}님의 사주 해석 결과</h1>
          <p className="result-subtitle">당신의 운명을 밝혀드립니다</p>
        </div>
        
        <div className="result-grid">
          <div className="saju-reading">
            <div className="element-chart">
              <h3>당신의 오행 구성</h3>
              <ElementChart elementData={sajuResult.elements} />
            </div>
            
            <div className="reading-content">
              <div className="reading-section">
                <h3>기본 사주 해석</h3>
                <p>{sajuResult.introduction}</p>
              </div>
              
              <div className="reading-section">
                <h3>2025년 운세 분석</h3>
                <p>{sajuResult.analysis}</p>
              </div>
              
              <div className="reading-section">
                <h3>{userData.concern} 관련 조언</h3>
                <p>{sajuResult.concernAdvice}</p>
              </div>
              
              <div className="today-advice">
                <h3>오늘의 조언</h3>
                <p>{sajuResult.todayAdvice}</p>
              </div>
              
              <button 
                className="share-button" 
                onClick={handleShareResult}
              >
                <i className="fas fa-share-alt"></i> {copied ? '복사됨!' : '결과 공유하기'}
              </button>
            </div>
          </div>
          
          <div className="talisman-upsell">
            <h2>나만의 맞춤형 부적</h2>
            <div className="talisman-preview">
              <div className="blurred-image">
                <img src={`/images/talismans/${sajuResult.dominantElement}_preview.png`} alt="부적 미리보기" />
                <div className="blur-overlay"></div>
              </div>
            </div>
            
            <h3>{sajuResult.dominantElement} 행운 부적</h3>
            <p>
              이 맞춤형 {sajuResult.dominantElement} 부적은 귀하의 사주에 맞춰 특별히 설계되었습니다. 
              {userData.concern} 운을 향상시키고 긍정적인 에너지를 끌어당깁니다.
            </p>
            
            <ul className="talisman-benefits">
              <li>개인 사주에 맞춘 맞춤형 디자인</li>
              <li>2025년 운세를 개선하는 특별한 기운</li>
              <li>고해상도 디지털 이미지로 제공</li>
              <li>인쇄하여 지갑이나 방에 보관 가능</li>
            </ul>
            
            <div className="price-tag">5,000원</div>
            
            <button 
              className="buy-button"
              onClick={handleBuyTalisman}
            >
              <i className="fas fa-shopping-cart"></i> 부적 구매하기
            </button>
            
            <div className="testimonials">
              <div className="testimonial">
                "부적을 받은 후 면접에 합격했어요! 정말 효과가 있네요." - 김OO님
              </div>
              <div className="testimonial">
                "매일 휴대폰 배경화면으로 사용하고 있어요. 마음이 편안해집니다." - 이OO님
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ResultPage;