import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';

const Container = styled(RouterNavLink)`
  padding: 10px 0;
  margin: 0 10px;
  background: none;
  color: ${props => props.theme.colors.white};
  height: ${props => props.theme.values.tabListHeight};
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  &.isActive {}
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