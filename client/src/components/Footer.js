import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>사주포춘</h3>
            <p>AI 기반 사주 분석 서비스</p>
          </div>
          <div className="footer-links">
            <h4>바로가기</h4>
            <ul>
              <li><a href="/">홈</a></li>
              <li><a href="/about">소개</a></li>
              <li><a href="#saju-form">사주 분석</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>문의하기</h4>
            <p>이메일: info@sajufortune.com</p>
            <p>전화: 02-123-4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 사주포춘. All rights reserved.</p>
          <p><a href="/privacy">개인정보처리방침</a> | <a href="/terms">이용약관</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;