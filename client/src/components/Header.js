import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const pages = [
    { name: '홈', path: '/' },
    { name: '제품', path: '/products' },
    { name: '가이드', path: '/guide' },
    { name: '환불 정책', path: '/refund' },
    { name: '고객 지원', path: '/support' }
  ];

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