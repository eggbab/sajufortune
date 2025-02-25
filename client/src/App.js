import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import PaymentPage from './pages/PaymentPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/result" component={ResultPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/thank-you" component={ThankYouPage} />
    </Switch>
  );
}

export default App; 