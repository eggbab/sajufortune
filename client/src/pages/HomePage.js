import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      
      <main className="home-main">
        <div className="hero-section">
          <div className="hero-content">
            <h1>당신의 운명을 알려드립니다</h1>
            <p>사주풀이로 알아보는 나의 잠재력과 미래의 길</p>
            <div className="hero-buttons">
              <Link to="/analysis" className="primary-button">
                <i className="fas fa-chart-line"></i> 사주 분석하기
              </Link>
              <Link to="/products" className="secondary-button">
                <i className="fas fa-gift"></i> 프리미엄 서비스
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;