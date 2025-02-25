import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>사주포춘</h3>
            <p>동양의 지혜로 당신의 미래를 밝혀드립니다</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h4>서비스</h4>
              <ul>
                <li><Link to="/">사주 해석</Link></li>
                <li><Link to="/talisman">부적 구매</Link></li>
                <li><Link to="/faq">자주 묻는 질문</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>회사 정보</h4>
              <ul>
                <li><Link to="/about">회사 소개</Link></li>
                <li><Link to="/terms">이용약관</Link></li>
                <li><Link to="/privacy">개인정보처리방침</Link></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h4>고객 지원</h4>
              <ul>
                <li><Link to="/contact">문의하기</Link></li>
                <li><a href="mailto:support@sajufortune.com">이메일</a></li>
                <li><a href="tel:+8201012345678">전화: 010-1234-5678</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 사주포춘 (주). 모든 권리 보유.</p>
          <p>사업자등록번호: 123-45-67890 | 대표: 김사주</p>
          <p>서울특별시 강남구 테헤란로 123, 사주빌딩 4층</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;