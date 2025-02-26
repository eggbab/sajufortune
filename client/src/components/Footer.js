import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">사주포춘</Link>
            <p>당신의 미래를 밝혀드립니다</p>
          </div>
          
          <div className="footer-links">
            <h3>바로가기</h3>
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/about">소개</Link></li>
              <li><Link to="/services">서비스</Link></li>
              <li><Link to="/reviews">후기</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3>문의하기</h3>
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <span>이메일: vmeandbeme@gmail.com</span>
              </li>
              <li>
                <i className="fas fa-id-card"></i>
                <span>사업자등록번호: 123-45-67890</span>
              </li>
              <li>
                <i className="fas fa-user"></i>
                <span>대표자: 홍길동</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 사주포춘. All rights reserved.</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;