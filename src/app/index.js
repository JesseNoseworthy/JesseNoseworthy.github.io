// This will be the entry point for the application
import '../../config/js-logger.config';

// Render
import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import AppData from './data/app.json';

render(
  <App data={AppData} />,
  document.getElementById('app')
);