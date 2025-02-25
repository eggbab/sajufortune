import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">사주포춘</Link>
          </div>
          <nav className="main-nav">
            <ul>
              <li><Link to="/">홈</Link></li>
              <li><Link to="/about">소개</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;