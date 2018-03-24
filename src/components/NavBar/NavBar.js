import React, { Component } from 'react';
import styled from 'styled-components';
import NavLink from 'components/NavLink';
import media from 'utils/media';

const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  min-height: ${props => props.theme.values.tabListHeight};
  padding: 0 10px;
  
  ${media.desktop`justify-content: flex-end;`};
`;

class NavBar extends Component {
  render() {
    const { routes } = this.props;

    return (
      <Container>
        {routes.map(route => 
          <NavLink to={route.path} key={route.id}>
            {route.label}
          </NavLink>
        )}
      </Container>
    )
  }
}

export default NavBar;