import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          <h1>사주포춘</h1>
        </Link>
        <nav className="nav">
          <ul>
            <li><Link to="/">홈</Link></li>
            <li><a href="#about">서비스 소개</a></li>
            <li><a href="#testimonials">이용후기</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;