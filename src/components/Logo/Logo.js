import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import ROUTES from 'app/routes';

const Title = styled(RouterNavLink)`
  line-height: ${props => props.theme.values.navBarHeight};
  color: ${props => props.theme.colors.white};
  font-size: 2rem;
  font-family: 'Rock Salt', cursive;
  text-decoration: none;
`;

const Logo = () => <Title to={ROUTES[0].path} tabIndex={-1}>JN.</Title>

export default Logo;