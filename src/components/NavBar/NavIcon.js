import React from 'react';
import styled from 'styled-components';

const OpenButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

const IconLine = styled.span`
  display: block;
  width: 37px;
  height: 4px;
  background-color: ${props => props.theme.colors.primary};
  margin: 6px 0;
`;

const NavIcon = ({ openModal }) => (
  <OpenButton onClick={openModal}>
    <IconLine />
    <IconLine />
    <IconLine />
  </OpenButton>
)

export default NavIcon;