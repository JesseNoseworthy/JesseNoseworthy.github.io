import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  height: ${props => props.theme.values.tabListHeight};
  padding: 10px;

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