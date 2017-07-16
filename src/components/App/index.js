import React, { Component } from 'react';
import Hero from 'components/Hero';

class App extends Component {
  render() {
    const { data } = this.props;

    return (
      <Hero {...data} />
    );
  }
}

export default App;