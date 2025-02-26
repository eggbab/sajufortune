import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ type = "default" }) {
  // 네비게이션 메뉴 항목
  const navItems = [
    { name: '홈', path: '/' },
    { name: '제품', path: '/products' },
    { name: 'FAQ', path: '/faq' },
    { name: '고객 지원', path: '/support' }
  ];

  return (
    <header className={`site-header ${type}-header`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">사주포춘</Link>
          </div>
          <nav className="site-nav">
            {type === "default" ? (
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            ) : (
              <Link to="/" className="btn-back">홈으로 돌아가기</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;