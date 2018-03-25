import React, { Component } from 'react';
import styled from 'styled-components';
import NavLink from 'components/NavLink';
import media from 'utils/media';

const Container = styled.div`
  background: ${props => props.theme.colors.fadedBlack};
  display: flex;
  justify-content: space-between;
  min-height: ${props => props.theme.values.navBarHeight};
  padding: 0 20px;
  width: 100vw;

  ${media.desktop`
    position: absolute;
    top: 0;
  `};

  ${media.tablet`
    position: absolute;
    top: 0;
  `};
`;

const NavLinkContainer = styled.div`display: flex;`;

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
        <Title>JN.</Title>
        <NavLinkContainer>
          {routes.map(route => 
            <NavLink to={route.path} key={route.id}>
              {route.label}
            </NavLink>
          )}
        </NavLinkContainer>
      </Container>
    )
  }
}

export default NavBar;