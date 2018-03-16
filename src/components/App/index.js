import React, { Component } from 'react';
import { data } from 'app/data/text';
import TabData from 'components/TabData';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
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