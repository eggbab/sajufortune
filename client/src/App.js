import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Analysis from './pages/Analysis';
import Result from './pages/Result';
import OtherResultView from './pages/OtherResultView';
import FAQ from './pages/FAQ';
import NotFound from './pages/Notfound';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Products from './pages/Products';
import Premium from './pages/Premium';
import Support from './pages/Support';

function App() {
  // 전역 상태로 관리하여 컴포넌트 간 데이터 공유
  const [resultData, setResultData] = useState(null);
  const [userData, setUserData] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setResultData={setResultData} setUserData={setUserData} />} />
        <Route path="/analysis" element={<Analysis setResultData={setResultData} setUserData={setUserData} />} />
        <Route path="/result" element={<Result resultData={resultData} userData={userData} />} />
        <Route path="/shared/:id" element={<OtherResultView />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/products" element={<Products />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App; 