import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // 추후 실제 로그인 API 연동
      console.log('로그인 시도:', { email, password });
      
      // 임시 로그인 성공 처리
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      
      // 로딩 효과를 위한 타임아웃
      setTimeout(() => {
        setLoading(false);
        navigate('/');
      }, 1500);
    } catch (err) {
      setLoading(false);
      setError('로그인에 실패했습니다. 이메일과 비밀번호를 확인해 주세요.');
    }
  };

  return (
    <div className="login-page">
      <Header />
      
      <main>
        <section className="login-section">
          <div className="container">
            <motion.div 
              className="login-form-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>로그인</h1>
              <p className="form-subtitle">사주포춘에 오신 것을 환영합니다</p>
              
              {error && <div className="alert-error">{error}</div>}
              
              <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                  <label htmlFor="email">이메일</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">비밀번호</label>
                  <input 
                    type="password" 
                    id="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" id="remember" />
                    <span>로그인 상태 유지</span>
                  </label>
                  <Link to="/forgot-password" className="forgot-link">비밀번호 찾기</Link>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-login"
                  disabled={loading}
                >
                  {loading ? '로그인 중...' : '로그인'}
                </button>
              </form>
              
              <div className="social-login">
                <p>또는 소셜 계정으로 로그인</p>
                <div className="social-buttons">
                  <button className="btn-social btn-kakao">
                    카카오 로그인
                  </button>
                  <button className="btn-social btn-google">
                    구글 로그인
                  </button>
                </div>
              </div>
              
              <div className="register-link">
                <p>계정이 없으신가요? <Link to="/register">회원가입</Link></p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .login-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .login-section {
          padding: 80px 0;
        }
        
        .login-form-container {
          max-width: 450px;
          margin: 0 auto;
          background-color: var(--card-bg);
          border-radius: 15px;
          padding: 40px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        h1 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-align: center;
          color: var(--text-color);
        }
        
        .form-subtitle {
          text-align: center;
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 30px;
        }
        
        .alert-error {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.9rem;
          margin-bottom: 20px;
        }
        
        .login-form {
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        label {
          display: block;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--text-color);
        }
        
        input[type="email"],
        input[type="password"] {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--input-bg);
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        input[type="email"]:focus,
        input[type="password"]:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px var(--primary-light);
        }
        
        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }
        
        .checkbox-label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .checkbox-label input {
          margin-right: 8px;
        }
        
        .forgot-link {
          color: var(--primary-color);
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .forgot-link:hover {
          text-decoration: underline;
        }
        
        .btn-login {
          width: 100%;
          padding: 12px;
          background-color: var(--primary-color);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-login:hover {
          background-color: #7d3c98;
        }
        
        .btn-login:disabled {
          background-color: var(--border-color);
          cursor: not-allowed;
        }
        
        .social-login {
          margin-top: 30px;
          text-align: center;
        }
        
        .social-login p {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 15px;
          position: relative;
        }
        
        .social-login p::before,
        .social-login p::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 25%;
          height: 1px;
          background-color: var(--border-color);
        }
        
        .social-login p::before {
          left: 0;
        }
        
        .social-login p::after {
          right: 0;
        }
        
        .social-buttons {
          display: flex;
          gap: 15px;
        }
        
        .btn-social {
          flex: 1;
          padding: 12px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-kakao {
          background-color: #fee500;
          color: #000;
        }
        
        .btn-google {
          background-color: white;
          color: #333;
          border: 1px solid var(--border-color);
        }
        
        .btn-social:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        
        .register-link {
          margin-top: 25px;
          text-align: center;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        
        .register-link a {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
        }
        
        .register-link a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 576px) {
          .login-section {
            padding: 60px 0;
          }
          
          .login-form-container {
            padding: 30px 20px;
          }
          
          .social-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage; 