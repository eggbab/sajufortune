import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <Header />
      
      <main className="not-found-content">
        <div className="container">
          <motion.div 
            className="not-found-box"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="error-code">404</div>
            <h1>페이지를 찾을 수 없습니다</h1>
            <p>
              찾으시려는 페이지가 삭제되었거나 주소가 변경되었을 수 있습니다.
              <br />
              입력하신 주소가 정확한지 다시 한번 확인해 주세요.
            </p>
            
            <div className="action-buttons">
              <Link to="/" className="btn-primary">
                <i className="fas fa-home"></i> 홈으로 이동
              </Link>
              <Link to="/products" className="btn-secondary">
                <i className="fas fa-star"></i> 서비스 둘러보기
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="not-found-stars"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="star"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`
                }}
              ></div>
            ))}
          </motion.div>
        </div>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .not-found-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
          position: relative;
          overflow: hidden;
        }
        
        .not-found-content {
          padding: 120px 0;
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        
        .not-found-box {
          background-color: var(--card-bg);
          border-radius: 20px;
          padding: 50px;
          max-width: 600px;
          width: 100%;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 1;
        }
        
        .error-code {
          font-size: 8rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 20px;
          background: linear-gradient(to right, #8e44ad, #3498db);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .not-found-box h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--text-color);
        }
        
        .not-found-box p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
          line-height: 1.6;
        }
        
        .action-buttons {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        
        .btn-primary,
        .btn-secondary {
          padding: 12px 25px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
        
        .btn-primary {
          background-color: var(--primary-color);
          color: white;
        }
        
        .btn-secondary {
          background-color: transparent;
          color: var(--primary-color);
          border: 1px solid var(--primary-color);
        }
        
        .btn-primary:hover,
        .btn-secondary:hover {
          transform: translateY(-3px);
        }
        
        .btn-primary:hover {
          background-color: #7d3c98;
        }
        
        .btn-secondary:hover {
          background-color: var(--primary-light);
        }
        
        .not-found-stars {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .star {
          position: absolute;
          background-color: #fff;
          border-radius: 50%;
          box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
          animation: twinkle 5s infinite ease-in-out;
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
        
        @media (max-width: 768px) {
          .not-found-content {
            padding: 80px 0;
          }
          
          .not-found-box {
            padding: 30px;
          }
          
          .error-code {
            font-size: 6rem;
          }
          
          .not-found-box h1 {
            font-size: 1.5rem;
          }
        }
        
        @media (max-width: 576px) {
          .not-found-content {
            padding: 60px 0;
          }
          
          .error-code {
            font-size: 5rem;
          }
          
          .action-buttons {
            flex-direction: column;
          }
          
          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage; 