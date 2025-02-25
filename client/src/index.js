import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ResultPage from './pages/ResultPage';
import AboutPage from './pages/AboutPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/result" component={ResultPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);