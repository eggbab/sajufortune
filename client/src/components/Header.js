import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/Header.css';

const Header = ({ toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  
  // 스크롤 이벤트 리스너
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 페이지 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // 모바일 메뉴 토글
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    
    // 메뉴가 열릴 때 body 스크롤 방지
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  // 검색 폼 토글
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setTimeout(() => {
        document.getElementById('searchInput')?.focus();
      }, 100);
    }
  };
  
  // 검색 폼 제출
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // 검색 페이지로 이동 (실제 구현 시)
      console.log('검색어:', searchQuery);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };
  
  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-text">
              <span className="logo-text-primary">사주</span>
              <span className="logo-text-secondary">포춘</span>
            </div>
          </Link>
          
          <nav className="desktop-nav">
            <ul>
              <li>
                <NavLink to="/" end>
                  홈
                  <div className="active-indicator"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/analysis">
                  사주 분석
                  <div className="active-indicator"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/products">
                  서비스
                  <div className="active-indicator"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/compatibility">
                  궁합 보기
                  <div className="active-indicator"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  소개
                  <div className="active-indicator"></div>
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq">
                  FAQ
                  <div className="active-indicator"></div>
                </NavLink>
              </li>
            </ul>
          </nav>
          
          <div className="header-actions">
            {isSearchOpen ? (
              <form className="search-form" onSubmit={handleSearchSubmit}>
                <input 
                  id="searchInput"
                  type="text" 
                  placeholder="검색어를 입력하세요" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">
                  <i className="fas fa-search"></i>
                </button>
                <button type="button" className="search-close" onClick={toggleSearch}>
                  <i className="fas fa-times"></i>
                </button>
              </form>
            ) : (
              <>
                <button className="icon-button" onClick={toggleSearch} aria-label="검색">
                  <i className="fas fa-search"></i>
                </button>
                
                {toggleTheme && (
                  <div className="theme-toggle-container">
                    <button 
                      className="icon-button" 
                      onClick={toggleTheme} 
                      aria-label="테마 변경"
                    >
                      <i className="fas fa-moon"></i>
                    </button>
                  </div>
                )}
                
                <div className="login-signup">
                  <Link to="/login" className="login-button">
                    로그인
                  </Link>
                </div>
                
                <button 
                  className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
                  onClick={toggleMobileMenu}
                  aria-label="모바일 메뉴"
                >
                  <span className="menu-bar"></span>
                  <span className="menu-bar"></span>
                  <span className="menu-bar"></span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* 모바일 메뉴 */}
      <div className={`menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
      
      <motion.div 
        className="mobile-menu"
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="mobile-menu-header">
          <div className="logo-text">
            <span className="logo-text-primary">사주</span>
            <span className="logo-text-secondary">포춘</span>
          </div>
          <button className="menu-close" onClick={toggleMobileMenu}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <nav className="mobile-nav">
          <ul>
            <li>
              <NavLink to="/" end onClick={toggleMobileMenu}>
                홈
              </NavLink>
            </li>
            <li>
              <NavLink to="/analysis" onClick={toggleMobileMenu}>
                사주 분석
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" onClick={toggleMobileMenu}>
                서비스
              </NavLink>
            </li>
            <li>
              <NavLink to="/compatibility" onClick={toggleMobileMenu}>
                궁합 보기
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleMobileMenu}>
                소개
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" onClick={toggleMobileMenu}>
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" onClick={toggleMobileMenu}>
                고객 지원
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" onClick={toggleMobileMenu}>
                로그인
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" onClick={toggleMobileMenu}>
                회원가입
              </NavLink>
            </li>
          </ul>
        </nav>
        
        <div className="mobile-menu-footer">
          <div className="mobile-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="https://blog.naver.com" target="_blank" rel="noopener noreferrer">
              <i className="fas fa-bold"></i>
            </a>
          </div>
          
          <div className="mobile-contact">
            <p>고객센터: 02-123-4567</p>
            <p>이메일: support@sajufortune.com</p>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;