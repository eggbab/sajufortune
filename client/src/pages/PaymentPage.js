import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sajuApi } from '../api/sajuApi';
import '../styles/PaymentPage.css';

function PaymentPage() {
  const history = useHistory();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // location.state에서 데이터 추출
  const userData = location.state?.userData || null;
  const sajuResult = location.state?.sajuResult || null;
  const talisman = location.state?.talisman || null;
  
  // 데이터가 없으면 홈페이지로 리디렉션
  if (!userData || !sajuResult || !talisman) {
    history.replace('/');
    return null;
  }
  
  const handlePayment = async () => {
    setLoading(true);
    setError('');
    
    try {
      // 여기에 실제 결제 로직 구현
      // 결제가 성공하면 부적 생성 API 호출
      
      // 부적 생성 API 호출
      const talismanResult = await sajuApi.generateTalisman(userData, sajuResult);
      
      // 결제 및 부적 생성 성공 시 감사 페이지로 이동
      history.push({
        pathname: '/thank-you',
        state: {
          userData,
          sajuResult,
          talisman: {
            ...talisman,
            imageUrl: talismanResult.fullImagePath
          }
        }
      });
    } catch (error) {
      console.error('결제 또는 부적 생성 중 오류:', error);
      setError('결제 처리 중 오류가 발생했습니다. 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="payment-page">
      <Header />
      <main className="payment-content">
        <div className="payment-container">
          <h1>부적 구매하기</h1>
          <p className="payment-description">
            {userData.name}님의 {sajuResult.dominantElement} 행운 부적을 구매합니다.
          </p>
          
          {error && <div className="error-message">{error}</div>}
          
          <div className="payment-details">
            <div className="product-summary">
              <h2>주문 내역</h2>
              <div className="product-item">
                <span>{sajuResult.dominantElement} 행운 부적</span>
                <span>5,000원</span>
              </div>
              <div className="total-price">
                <span>총 결제금액</span>
                <span>5,000원</span>
              </div>
            </div>
            
            <div className="payment-form">
              <h2>결제 정보</h2>
              <div className="form-group">
                <label htmlFor="cardNumber">카드 번호</label>
                <input type="text" id="cardNumber" placeholder="0000-0000-0000-0000" />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="expiryDate">유효기간</label>
                  <input type="text" id="expiryDate" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder="123" />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="cardHolder">카드 소유자 이름</label>
                <input type="text" id="cardHolder" placeholder="홍길동" />
              </div>
              
              <button 
                className="payment-button" 
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? '처리 중...' : '결제하기'}
              </button>
              
              <p className="payment-notice">
                * 이 결제는 테스트용입니다. 실제 결제는 이루어지지 않습니다.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PaymentPage;