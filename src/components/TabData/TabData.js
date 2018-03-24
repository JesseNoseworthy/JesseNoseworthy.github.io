import React, { Component } from 'react';
import Tabs from 'components/Tabs';
import TabList from 'components/TabList';
import Tab from 'components/Tab';
import TabPanels from 'components/TabPanels';
import TabPanel from 'components/TabPanel';

class TabData extends Component {
  render() {
    const { data } = this.props
    return (
      <Tabs>
        <TabList>
          {data.map((tab, key) =>
            <Tab key={key}>
              {tab.label}
            </Tab>
          )}
        </TabList>
        <TabPanels>
          {data.map((tab, key) =>
            <TabPanel key={key}>
              {tab.content}
            </TabPanel>
          )}
        </TabPanels>
      </Tabs>
    )
  }
}


export default TabData;