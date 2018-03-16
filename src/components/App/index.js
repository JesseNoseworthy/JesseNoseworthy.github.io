import React, { Component } from 'react';
import * as text from 'app/data/text';
import TabData from 'components/TabData';


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
      <div className="App">
        <TabData data={tabData} />
      </div>
    )
  }
}

export default App;