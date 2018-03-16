import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
  padding: 10px;
  border: 1px solid red;
`;

class TabList extends Component {
  render() {
    const { activeIndex } = this.props;

    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => this.props.onSelectTab(index)
      })
    });

    return (
      <Container>
        {children}
      </Container>
    )
  }
}

export default TabList;