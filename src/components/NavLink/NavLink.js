import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const Container = styled(RouterNavLink)`
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px 0;
  margin: 0 10px;
  background: none;
  color: ${props => props.theme.colors.white};
  height: ${props => props.theme.values.navBarHeight};
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: ${props => `color ${props.theme.values.baseTransition}`};

  &:hover,
  &.isActive {
    color: ${props => props.theme.colors.primary};
  }
`;

class NavLink extends Component {
  render() {
    const { children, ...others } = this.props;
    return (
      <Container activeClassName="isActive" {...others}>
        {children}
      </Container>
    )
  }
}

export default NavLink;