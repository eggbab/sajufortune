import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>사주포춘</h3>
            <p>한국 전통 사주팔자의 지혜를 현대적으로 해석하여 제공합니다.</p>
          </div>
          
          <div className="footer-section">
            <h3>연락처</h3>
            <p>이메일: info@sajufortune.kr</p>
            <p>전화: 02-123-4567</p>
          </div>
          
          <div className="footer-section">
            <h3>링크</h3>
            <ul>
              <li><a href="/privacy">개인정보처리방침</a></li>
              <li><a href="/terms">이용약관</a></li>
              <li><a href="/about">회사소개</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} 사주포춘. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;