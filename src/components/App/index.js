import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'app/theme';
import Body from 'components/Body';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Body {...this.props} />
      </ThemeProvider>
    )
  }
}

export default App;