import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  margin: 20px;
  height: calc(100vh - (20px * 2));
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.desktop`
    width: 80vw;
    height: 80vh;
    margin: 0;
  `};
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