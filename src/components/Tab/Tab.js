import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  ${props => props.isActive && css`
    background: red;
  `};
  ${props => props.disabled && css`
    background: rgba(0, 0, 0, 0.25);
  `};
`;

const Tab = ({ children, onSelect, isDisabled, ...others }) => (
  <Container onClick={isDisabled ? null : onSelect} {...others}>
    {children}
  </Container>
);

export default Tab;