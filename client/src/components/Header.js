import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
              <h1>사주포춘</h1>
            </Link>
          </div>
          
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link to="/" className="nav-link">홈</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">서비스 소개</Link>
              </li>
              <li className="nav-item">
                <Link to="/terms" className="nav-link">이용약관</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;