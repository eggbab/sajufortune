import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>사주포춘</h2>
            <p>당신의 운명을 해석합니다</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h3>서비스</h3>
              <ul>
                <li><Link to="/">무료 사주 분석</Link></li>
                <li><Link to="/about">서비스 소개</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>고객지원</h3>
              <ul>
                <li><Link to="/terms">이용약관</Link></li>
                <li><Link to="/privacy">개인정보처리방침</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h3>회사정보</h3>
              <ul>
                <li>사주포춘</li>
                <li>대표: 김우진</li>
                <li>사업자등록번호: 426-62-00632</li>
                <li>이메일: vmeandbeme@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} SajuFortune Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;