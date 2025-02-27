import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  
  // 뉴스레터 구독 처리
  const handleSubscribe = (e) => {
    e.preventDefault();
    
    if (!email.trim() || !validateEmail(email)) {
      setSubscribeStatus({
        type: 'error',
        message: '유효한 이메일 주소를 입력해주세요.'
      });
      return;
    }
    
    // 실제 구현에서는 API 호출
    setTimeout(() => {
      setSubscribeStatus({
        type: 'success',
        message: '성공적으로 구독되었습니다. 감사합니다!'
      });
      setEmail('');
      
      // 3초 후 메시지 제거
      setTimeout(() => {
        setSubscribeStatus(null);
      }, 3000);
    }, 1000);
  };
  
  // 이메일 유효성 검사
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  
  // 현재 연도 가져오기
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,154.7C384,160,480,192,576,202.7C672,213,768,203,864,186.7C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="logo-text-primary">사주</span>
              <span className="logo-text-secondary">포춘</span>
            </motion.h2>
            <p>당신의 사주를 분석하여 더 나은 선택을 돕는 동반자</p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-column">
              <h3>서비스</h3>
              <ul>
                <li><Link to="/analysis">사주 분석</Link></li>
                <li><Link to="/products">서비스 안내</Link></li>
                <li><Link to="/compatibility">궁합 보기</Link></li>
                <li><Link to="/products/premium">프리미엄 서비스</Link></li>
                <li><Link to="/products/vip">VIP 패키지</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>고객 지원</h3>
              <ul>
                <li><Link to="/faq">자주 묻는 질문</Link></li>
                <li><Link to="/support">고객센터</Link></li>
                <li><Link to="/refund">환불 정책</Link></li>
                <li><Link to="/privacy">개인정보 처리방침</Link></li>
                <li><Link to="/terms">이용약관</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>소개</h3>
              <ul>
                <li><Link to="/about">회사 소개</Link></li>
                <li><a href="https://blog.sajufortune.com" target="_blank" rel="noopener noreferrer">블로그</a></li>
                <li><Link to="/about/team">전문가 소개</Link></li>
                <li><Link to="/careers">채용 정보</Link></li>
                <li><Link to="/partnership">제휴 문의</Link></li>
              </ul>
            </div>
            
            <div className="footer-column subscribe-column">
              <h3>뉴스레터 구독</h3>
              <p>월간 운세와 할인 정보를 받아보세요</p>
              
              <form className="subscribe-form" onSubmit={handleSubscribe}>
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="이메일 주소" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="subscribe-btn">
                    구독하기
                  </button>
                </div>
                
                {subscribeStatus && (
                  <div className={`${subscribeStatus.type === 'error' ? 'error-message' : 'success-message'}`}>
                    {subscribeStatus.message}
                  </div>
                )}
              </form>
              
              <div className="data-security">
                <i className="fas fa-shield-alt"></i> 
                <span>개인정보는 안전하게 보호됩니다</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-middle">
          <div className="footer-app-badges">
            <h3>모바일 앱 다운로드</h3>
            <div className="app-badges">
              <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer" className="app-badge">
                <img src="/assets/app-store-badge.png" alt="App Store" />
              </a>
              <a href="https://play.google.com" target="_blank" rel="noopener noreferrer" className="app-badge">
                <img src="/assets/google-play-badge.png" alt="Google Play" />
              </a>
            </div>
          </div>
          
          <div className="payment-methods">
            <h3>결제 방법</h3>
            <div className="payment-logos">
              <img src="/assets/payment/visa.png" alt="Visa" className="payment-logo" />
              <img src="/assets/payment/mastercard.png" alt="Mastercard" className="payment-logo" />
              <img src="/assets/payment/amex.png" alt="American Express" className="payment-logo" />
              <img src="/assets/payment/paypal.png" alt="PayPal" className="payment-logo" />
              <img src="/assets/payment/kakaopay.png" alt="KakaoPay" className="payment-logo" />
              <img src="/assets/payment/naverpay.png" alt="NaverPay" className="payment-logo" />
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-bold"></i>
            </a>
          </div>
          
          <div className="footer-info">
            <p>
              <strong>(주)사주포춘</strong> | 대표: 김운세 | 사업자등록번호: 123-45-67890
              <br />
              주소: 서울특별시 강남구 테헤란로 123, 포춘빌딩 8층 | 전화: 02-123-4567 | 이메일: support@sajufortune.com
            </p>
          </div>
          
          <div className="footer-links">
            <Link to="/terms">이용약관</Link>
            <span>|</span>
            <Link to="/privacy">개인정보 처리방침</Link>
            <span>|</span>
            <Link to="/youth">청소년보호정책</Link>
            <span>|</span>
            <Link to="/sitemap">사이트맵</Link>
          </div>
          
          <p className="copyright">
            © {currentYear} 사주포춘. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;