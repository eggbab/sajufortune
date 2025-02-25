import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import PaymentPage from './pages/PaymentPage';
import ThankYouPage from './pages/ThankYouPage';
import './styles/globals.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/result" component={ResultPage} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/thank-you" component={ThankYouPage} />
    </Switch>
  </Router>,
  document.getElementById('root')
);