import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/ThankYouPage.css';

function ThankYouPage() {
  const history = useHistory();
  const location = useLocation();
  
  // location.state에서 데이터 추출
  const userData = location.state?.userData || null;
  const talisman = location.state?.talisman || null;
  
  // 데이터가 없으면 홈페이지로 리디렉션
  if (!userData || !talisman) {
    history.replace('/');
    return null;
  }
  
  return (
    <div className="thank-you-page">
      <Header />
      <main className="container">
        <div className="thank-you-container">
          <h1>감사합니다!</h1>
          <div className="success-message">
            <p>결제가 성공적으로 완료되었습니다.</p>
            <p>{userData.name}님의 {talisman.type} 부적이 곧 준비될 예정입니다.</p>
          </div>
          
          <div className="next-steps">
            <h2>다음 단계</h2>
            <p>1. 부적 제작이 완료되면 이메일로 알려드립니다.</p>
            <p>2. 부적을 받으신 후, 사주에 맞는 방법으로 보관해 주세요.</p>
            <p>3. 궁금한 점이 있으시면 언제든지 문의해 주세요.</p>
          </div>
          
          <button 
            className="home-button"
            onClick={() => history.push('/')}
          >
            홈으로 돌아가기
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ThankYouPage;