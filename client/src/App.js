import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
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
  
  // HomePage에 props를 전달하기 위한 함수
  const renderHomePage = (props) => (
    <HomePage {...props} setResultData={setResultData} setUserData={setUserData} />
  );
  
  // Result에 props를 전달하기 위한 함수
  const renderResultPage = (props) => (
    <Result {...props} resultData={resultData} userData={userData} />
  );
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={renderHomePage} />
        <Route path="/result" render={renderResultPage} />
        <Route path="/shared/:id" component={OtherResultView} />
        <Route path="/faq" component={FAQ} />
        <Route path="/refund" component={RefundPolicy} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={Terms} />
        <Route path="/products" component={Products} />
        <Route path="/premium" component={Premium} />
        <Route path="/support" component={Support} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App; 