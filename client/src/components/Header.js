import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <span className="logo-text">사주<span className="gradient-text">포춘</span></span>
        </Link>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">홈</Link>
            </li>
            <li className="nav-item">
              <a href="#features" className="nav-link">서비스 소개</a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link">후기</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;