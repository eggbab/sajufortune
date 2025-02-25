import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <Link to="/" className="logo">
            <span className="logo-text">사주<span className="gradient-text">포춘</span></span>
          </Link>
          <p className="footer-tagline">당신의 운명을 밝혀드립니다</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h3 className="footer-heading">서비스</h3>
            <ul className="footer-list">
              <li><Link to="/">사주 분석</Link></li>
              <li><Link to="/">맞춤형 부적</Link></li>
              <li><Link to="/">연간 운세</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">회사 정보</h3>
            <ul className="footer-list">
              <li><Link to="/about">회사 소개</Link></li>
              <li><Link to="/privacy">개인정보처리방침</Link></li>
              <li><Link to="/terms">이용약관</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">문의</h3>
            <ul className="footer-list">
              <li><a href="mailto:contact@sajufortune.kr">contact@sajufortune.kr</a></li>
              <li><a href="tel:+8210-1234-5678">010-1234-5678</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">© 2024 사주포춘. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;