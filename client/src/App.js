import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import Result from './pages/Result';
import OtherResultView from './pages/OtherResultView';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';

function App() {
  // 전역 상태로 관리하여 컴포넌트 간 데이터 공유
  const [resultData, setResultData] = useState(null);
  const [userData, setUserData] = useState(null);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setResultData={setResultData} setUserData={setUserData} />} />
        <Route path="/result" element={<Result resultData={resultData} userData={userData} />} />
        <Route path="/shared/:id" element={<OtherResultView />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App; 