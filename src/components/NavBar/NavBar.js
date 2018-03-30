import React, { Component } from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import Logo from 'components/Logo';
import media from 'utils/media';
import WithResponsive from 'utils/WithResponsive';

const Container = styled.header`
  background: ${props => props.theme.colors.fadedBlack};
  display: flex;
  justify-content: space-between;
  min-height: ${props => props.theme.values.navBarHeight};
  padding: 0 20px;
  width: 100vw;
  z-index: ${props => props.theme.values.navBarZindex};

  ${media.desktop`
    position: absolute;
    top: 0;
  `};

  ${media.tablet`
    position: absolute;
    top: 0;
  `};
`;

class NavBar extends Component {
  render() {
    const { routes } = this.props;

    return (
      <Container>
        <WithResponsive>
          <Logo>JN.</Logo>
          {routes && <NavLinks links={routes} />}
        </WithResponsive>
      </Container>
    )
  }
}

export default NavBar;