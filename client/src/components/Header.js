import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="result-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">사주포춘</Link>
          </div>
          <nav className="result-nav">
            <Link to="/" className="btn-outline">홈으로 돌아가기</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;