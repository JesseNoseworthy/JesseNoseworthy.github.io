import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from 'components/App';
import ROUTES from './routes';
import 'app/globalStyles';

render(
  <Router>
    <App routes={ROUTES} />
  </Router>,
  document.getElementById('app')
);