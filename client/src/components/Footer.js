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
            <h3>바로가기</h3>
            <ul>
              <li><a href="/">홈</a></li>
              <li><a href="/#about">서비스 소개</a></li>
              <li><a href="/#testimonials">이용후기</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>문의하기</h3>
            <p>이메일: contact@sajufortune.kr</p>
            <p>운영시간: 평일 10:00 - 18:00</p>
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