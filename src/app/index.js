// This will be the entry point for the application
import '../styles';
import '../../config/js-logger.config';

// Render
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);