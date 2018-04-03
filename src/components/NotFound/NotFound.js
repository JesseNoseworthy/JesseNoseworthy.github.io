import { Route } from 'react-router-dom';
import Home from 'components/Home';
import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    return <Route component={Home} />;
  }
}

export default NotFound;
