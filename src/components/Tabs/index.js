import React, { Component } from 'react';
import TabsContainer from 'components/Tabs/TabsContainer';
import TabList from 'components/Tabs/TabList';
import Tab from 'components/Tabs/Tab';
import TabPanels from 'components/Tabs/TabPanels';
import TabPanel from 'components/Tabs/TabPanel';

class Tabs extends Component {
  render() {
    const { tabsData } = this.props
    return (
      <TabsContainer>
        <TabList>
          {tabsData.map((tab, key) =>
            <Tab key={key} id={key}>
              {tab.label}
            </Tab>
          )}
        </TabList>
        <TabPanels>
          {tabsData.map((tab, key) =>
            <TabPanel key={key}>
              {tab.content}
            </TabPanel>
          )}
        </TabPanels>
      </TabsContainer>
    )
  }
}

export default Tabs;