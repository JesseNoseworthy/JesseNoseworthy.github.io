// This will be the entry point for the application
import '../../config/js-logger.config';

// Render
import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

render(<App />, document.getElementById('app'));