import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ResultPage from './pages/ResultPage';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/result" component={ResultPage} />
        {/* 기타 경로들... */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);