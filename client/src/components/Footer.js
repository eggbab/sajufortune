import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-column branding">
            <Link to="/" className="footer-logo">
              <img src="/images/logo-light.svg" alt="사주풀이" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">
              과학과 AI 기술로 현대화된<br />
              운세 분석 플랫폼
            </p>
            <div className="social-links">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div className="footer-column links">
            <h3>서비스</h3>
            <ul>
              <li><Link to="/analysis">사주 분석</Link></li>
              <li><Link to="/history">나의 분석 기록</Link></li>
              <li><Link to="/premium">프리미엄 서비스</Link></li>
              <li><Link to="/compatibility">궁합 확인</Link></li>
            </ul>
          </div>
          
          <div className="footer-column links">
            <h3>지원</h3>
            <ul>
              <li><Link to="/faq">자주 묻는 질문</Link></li>
              <li><Link to="/guide">이용 가이드</Link></li>
              <li><Link to="/contact">고객 지원</Link></li>
              <li><Link to="/feedback">피드백 남기기</Link></li>
            </ul>
          </div>
          
          <div className="footer-column newsletter">
            <h3>뉴스레터 구독</h3>
            <p>최신 업데이트와 특별 이벤트 소식을 받아보세요.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="이메일 주소" required />
              <button type="submit">구독</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; {currentYear} 사주풀이. All Rights Reserved.</p>
            <div className="legal-links">
              <Link to="/terms">이용약관</Link>
              <span className="separator">|</span>
              <Link to="/privacy">개인정보처리방침</Link>
              <span className="separator">|</span>
              <Link to="/disclaimer">이용 책임</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;