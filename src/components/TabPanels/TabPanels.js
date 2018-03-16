import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

class TabPanels extends Component {
  render() {
    const { activeIndex, children } = this.props
    return (
      <Container>
        {children[activeIndex]}
      </Container>
    )
  }
}

export default TabPanels;