import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import AnalysisPage from './pages/AnalysisPage';
import ProductsPage from './pages/ProductsPage';
import FAQPage from './pages/FAQPage';
import SupportPage from './pages/SupportPage';
import RefundPage from './pages/RefundPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CheckoutPage from './pages/CheckoutPage';
import ResultsPage from './pages/ResultsPage';
import CompatibilityPage from './pages/CompatibilityPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import './styles/main.css';
import './styles/Analysis.css';
import './styles/Products.css';
import './styles/ProductDetail.css';
import './styles/Checkout.css';

function App() {
  const [theme, setTheme] = useState('light');
  
  // 기본 테마 설정
  useEffect(() => {
    // 저장된 테마가 있는지 확인
    const savedTheme = localStorage.getItem('theme');
    
    // 시스템 기본 테마 확인
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 테마 설정
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);
  
  // 테마 변경 시 HTML 속성 업데이트
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // 테마 전환 함수
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <Router>
      <div className="App" data-theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage toggleTheme={toggleTheme} />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/compatibility" element={<CompatibilityPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/refund" element={<RefundPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 