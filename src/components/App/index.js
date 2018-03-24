import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { tabs } from 'app/data/tabs';
import TabData from 'components/TabData';
import media from 'utils/media';
import theme from 'app/theme';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.desktop`height: 100vh;`};
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <TabData data={tabs} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App;