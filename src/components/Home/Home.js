import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from 'app/data/routes';

class Home extends Component {
  render() {
    return <Redirect to={ROUTES[0].path} />;
  }
}

export default Home;
