import React, { Component } from 'react';
import * as text from 'app/data/text';
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
    const tabData = [
      {
        label: 1,
        content: text.cars
      },
      {
        label: 2,
        content: text.hotels
      },
      {
        label: 3,
        content: text.flights
      },
      {
        label: 4,
        content: text.space
      }
    ]

    return (
      <Container>
        <TabData data={tabData} />
      </Container>
    )
  }
}

export default App;