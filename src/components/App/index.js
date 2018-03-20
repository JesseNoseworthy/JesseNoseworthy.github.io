import React, { Component } from 'react';
import { data } from 'app/data/text';
import TabData from 'components/TabData';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  height: 100%;
  width: 100vw;
  background: rgb(250, 250, 250);
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.desktop`
    height: 100vh;
  `};

`;

class App extends Component {
  render() {
    return (
      <Container>
        <TabData data={data} />
      </Container>
    )
  }
}

export default App;