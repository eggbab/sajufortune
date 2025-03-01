import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    birthTime: '',
    gender: '',
    termsAgreed: false
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // 유효성 검사
    if (formData.password !== formData.confirmPassword) {
      setError('비밀번호가 일치하지 않습니다.');
      return;
    }
    
    if (!formData.termsAgreed) {
      setError('이용약관 및 개인정보 처리방침에 동의해주세요.');
      return;
    }
    
    setLoading(true);
    
    try {
      // 추후 실제 회원가입 API 연동
      console.log('회원가입 시도:', formData);
      
      // 임시 회원가입 성공 처리
      localStorage.setItem('userRegistered', 'true');
      
      // 로딩 효과를 위한 타임아웃
      setTimeout(() => {
        setLoading(false);
        navigate('/login');
      }, 1500);
    } catch (err) {
      setLoading(false);
      setError('회원가입에 실패했습니다. 다시 시도해 주세요.');
    }
  };

  return (
    <div className="register-page">
      <Header />
      
      <main>
        <section className="register-section">
          <div className="container">
            <motion.div 
              className="register-form-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1>회원가입</h1>
              <p className="form-subtitle">사주포춘 서비스를 위한 회원정보를 입력해 주세요</p>
              
              {error && <div className="alert-error">{error}</div>}
              
              <form onSubmit={handleSubmit} className="register-form">
                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="이름을 입력하세요"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">이메일</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="이메일 주소를 입력하세요"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="password">비밀번호</label>
                  <input 
                    type="password" 
                    id="password"
                    name="password"
                    placeholder="비밀번호를 입력하세요"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <small>영문, 숫자, 특수문자를 포함하여 8자 이상</small>
                </div>
                
                <div className="form-group">
                  <label htmlFor="confirmPassword">비밀번호 확인</label>
                  <input 
                    type="password" 
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="비밀번호를 다시 입력하세요"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-divider">
                  <span>사주 분석을 위한 정보</span>
                </div>
                
                <div className="form-group">
                  <label>생년월일</label>
                  <div className="date-inputs">
                    <select 
                      name="birthYear"
                      value={formData.birthYear}
                      onChange={handleChange}
                      required
                    >
                      <option value="">년도</option>
                      {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year}>{year}년</option>
                      ))}
                    </select>
                    
                    <select 
                      name="birthMonth"
                      value={formData.birthMonth}
                      onChange={handleChange}
                      required
                    >
                      <option value="">월</option>
                      {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
                        <option key={month} value={month}>{month}월</option>
                      ))}
                    </select>
                    
                    <select 
                      name="birthDay"
                      value={formData.birthDay}
                      onChange={handleChange}
                      required
                    >
                      <option value="">일</option>
                      {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                        <option key={day} value={day}>{day}일</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="birthTime">태어난 시간 (선택사항)</label>
                  <input 
                    type="time" 
                    id="birthTime"
                    name="birthTime"
                    value={formData.birthTime}
                    onChange={handleChange}
                  />
                  <small>정확한 시간을 모르는 경우 비워두셔도 됩니다.</small>
                </div>
                
                <div className="form-group">
                  <label>성별</label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        required
                      />
                      <span>남성</span>
                    </label>
                    <label className="radio-label">
                      <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        required
                      />
                      <span>여성</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group terms-check">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox" 
                      name="termsAgreed"
                      checked={formData.termsAgreed}
                      onChange={handleChange}
                      required
                    />
                    <span>
                      <Link to="/terms" target="_blank" className="terms-link">이용약관</Link> 및 
                      <Link to="/privacy" target="_blank" className="terms-link"> 개인정보 처리방침</Link>에 동의합니다
                    </span>
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-register"
                  disabled={loading}
                >
                  {loading ? '가입 중...' : '회원가입'}
                </button>
              </form>
              
              <div className="login-link">
                <p>이미 계정이 있으신가요? <Link to="/login">로그인</Link></p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <style jsx>{`
        .register-page {
          min-height: 100vh;
          background-color: var(--bg-color);
          color: var(--text-color);
        }
        
        .register-section {
          padding: 60px 0;
        }
        
        .register-form-container {
          max-width: 580px;
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
        
        .register-form {
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-divider {
          display: flex;
          align-items: center;
          margin: 30px 0;
          color: var(--text-secondary);
        }
        
        .form-divider::before,
        .form-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background-color: var(--border-color);
        }
        
        .form-divider span {
          padding: 0 15px;
          font-size: 0.95rem;
        }
        
        label {
          display: block;
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 8px;
          color: var(--text-color);
        }
        
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="time"],
        select {
          width: 100%;
          padding: 12px 15px;
          border-radius: 8px;
          border: 1px solid var(--border-color);
          background-color: var(--input-bg);
          color: var(--text-color);
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        input:focus,
        select:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px var(--primary-light);
        }
        
        small {
          display: block;
          font-size: 0.85rem;
          color: var(--text-tertiary);
          margin-top: 5px;
        }
        
        .date-inputs {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 10px;
        }
        
        .radio-group {
          display: flex;
          gap: 20px;
        }
        
        .radio-label {
          display: flex;
          align-items: center;
          cursor: pointer;
        }
        
        .radio-label input {
          margin-right: 8px;
        }
        
        .terms-check {
          margin-top: 30px;
        }
        
        .checkbox-label {
          display: flex;
          align-items: flex-start;
          cursor: pointer;
        }
        
        .checkbox-label input {
          margin-right: 10px;
          margin-top: 3px;
        }
        
        .terms-link {
          color: var(--primary-color);
          text-decoration: none;
        }
        
        .terms-link:hover {
          text-decoration: underline;
        }
        
        .btn-register {
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
          margin-top: 10px;
        }
        
        .btn-register:hover {
          background-color: #7d3c98;
        }
        
        .btn-register:disabled {
          background-color: var(--border-color);
          cursor: not-allowed;
        }
        
        .login-link {
          text-align: center;
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        
        .login-link a {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
        }
        
        .login-link a:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .register-form-container {
            padding: 30px 20px;
          }
        }
        
        @media (max-width: 576px) {
          .register-section {
            padding: 40px 0;
          }
          
          .date-inputs {
            grid-template-columns: 1fr;
          }
          
          .radio-group {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default RegisterPage; 