import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-page">
      <Header />
      <main>
        <div className="container">
          <div className="error-container">
            <h1>404</h1>
            <h2>페이지를 찾을 수 없습니다</h2>
            <p>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
            <Link to="/" className="btn-primary">홈으로 돌아가기</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFound;