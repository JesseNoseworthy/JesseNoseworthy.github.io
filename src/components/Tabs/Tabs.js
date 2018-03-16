import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50vw;
  padding: 25px;
  background: white;
`;

class Tabs extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      activeIndex: 0
    }

    this.selectTabIndex = this.selectTabIndex.bind(this);
  }

  selectTabIndex(activeIndex) {
    this.setState({ activeIndex })
  }

  render() {
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        activeIndex: this.state.activeIndex,
        onSelectTab: this.selectTabIndex
      })
    })
    return (
      <Container>
        {children}
      </Container>
    )
  }
}

export default Tabs;