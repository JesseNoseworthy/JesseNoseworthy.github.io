import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  position: absolute;
  width: 100vw;
  top: ${props => props.theme.values.navBarHeight};
  background: ${props => props.theme.colors.fadedBlack};
  border-top: ${props => `1px solid ${props.theme.colors.primary}`};
  display: flex;
  flex-direction: column;
  z-index: ${props => props.theme.values.tabListZindex};

  ${media.desktop`
    flex-direction: row;
    justify-content: center;
    height: ${props => `calc(${props.theme.values.navBarHeight} - (${props.theme.values.navBarHeight} / 4))`};
  `};
`;

class TabList extends Component {
  render() {
    const { activeIndex, onSelectTab } = this.props;

    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        isActive: index === activeIndex,
        onSelect: () => onSelectTab(index)
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