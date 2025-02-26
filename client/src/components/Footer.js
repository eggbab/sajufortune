import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h2>사주포춘</h2>
            <p>당신의 운명을 알려드립니다</p>
          </div>
          
          <div className="footer-nav">
            <div className="footer-column">
              <h3>서비스</h3>
              <ul>
                <li><Link to="/">무료 사주 분석</Link></li>
                <li><Link to="/products">프리미엄 서비스</Link></li>
                <li><Link to="/premium">전문가 상담</Link></li>
                <li><Link to="/products">커플 궁합</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>고객 지원</h3>
              <ul>
                <li><Link to="/faq">자주 묻는 질문</Link></li>
                <li><Link to="/support">문의하기</Link></li>
                <li><Link to="/refund">환불 정책</Link></li>
                <li><a href="mailto:vmeandbeme@gmail.com">이메일 문의</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>회사 정보</h3>
              <ul>
                <li><Link to="/about">회사 소개</Link></li>
                <li><Link to="/terms">이용약관</Link></li>
                <li><Link to="/privacy">개인정보처리방침</Link></li>
                <li><a href="https://blog.sajufortune.com" target="_blank" rel="noopener noreferrer">블로그</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-social">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
          </div>
          
          <div className="footer-info">
            <p>사업자등록번호: 426-62-00632 | 대표: 김우진</p>
            <p>주소: 서울특별시 강남구 테헤란로 123 | 이메일: vmeandbeme@gmail.com</p>
            <p>&copy; {currentYear} 사주포춘 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;