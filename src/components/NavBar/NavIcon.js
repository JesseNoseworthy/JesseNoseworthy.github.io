import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const OpenButton = styled.button`
  cursor: pointer;
  ${media.desktop`display: none;`};
`;

const NavIcon = ({ openModal }) => <OpenButton onClick={openModal}>Open</OpenButton>

export default NavIcon;