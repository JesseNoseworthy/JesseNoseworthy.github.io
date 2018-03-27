import React, { Component } from 'react';
import styled from 'styled-components';
import NavLinks from './NavLinks';
import media from 'utils/media';
import WithResponsive from 'utils/WithResponsive';

const Container = styled.div`
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


const Title = styled.h1`
  line-height: ${props => props.theme.values.navBarHeight};
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-family: 'Rock Salt', cursive;
`;

class NavBar extends Component {
  render() {
    const { routes } = this.props;

    return (
      <Container>
        <WithResponsive>
          <Title>JN.</Title>
          {routes && <NavLinks links={routes} />}
        </WithResponsive>
      </Container>
    )
  }
}

export default NavBar;