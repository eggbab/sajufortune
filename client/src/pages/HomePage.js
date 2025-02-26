import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <main style={{ minHeight: '70vh', padding: '50px 20px', textAlign: 'center' }}>
        <h1>사주포춘</h1>
        <p>당신의 운명을 알려드립니다</p>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;