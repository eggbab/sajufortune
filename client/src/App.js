import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
  const [resultData, setResultData] = useState(null);
  const [userData, setUserData] = useState(null);
  
  const renderHomePage = (props) => (
    <HomePage {...props} setResultData={setResultData} setUserData={setUserData} />
  );
  
  const renderAnalysis = (props) => (
    <Analysis {...props} setResultData={setResultData} setUserData={setUserData} />
  );
  
  const renderResult = (props) => (
    <Result {...props} resultData={resultData} userData={userData} />
  );
  
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={renderHomePage} />
        <Route path="/analysis" render={renderAnalysis} />
        <Route path="/result" render={renderResult} />
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