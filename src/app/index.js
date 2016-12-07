import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import PortfolioApp from '../components/PortfolioApp';

render( <AppContainer><PortfolioApp/></AppContainer>, document.querySelector("#app"));

if (module && module.hot) {
  module.hot.accept('../components/PortfolioApp', () => {
    const App = require('../components/PortfolioApp').default;
    render(
      <AppContainer>
        <App/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
