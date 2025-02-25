import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="result-footer">
      <div className="container">
        <p>&copy; 2023 사주포춘. All rights reserved.</p>
        <Link to="/" className="btn-text">홈으로 돌아가기</Link>
      </div>
    </footer>
  );
}

export default Footer;