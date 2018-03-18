import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  background: rgb(78, 108, 202);
  display: flex;
  justify-content: center;
  height: 10%;
  padding: 10px;
  border-top: 10px solid rgb(250, 250, 250);

  ${media.desktop`justify-content: flex-end;`};
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