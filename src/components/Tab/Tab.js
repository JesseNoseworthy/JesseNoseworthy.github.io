import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.button`
  padding: 10px 0;
  margin: 0 10px;
  background: none;
  color: ${props => props.theme.colors.white};
  cursor: pointer;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  border-left: none;
  border-right: none;
  ${props => props.isActive && css``};
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