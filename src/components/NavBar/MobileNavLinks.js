import React from 'react';
import styled from 'styled-components';
import WithModal from 'utils/WithModal';
import NavIcon from './NavIcon'

const Container = styled(WithModal)`display: flex;`;

const NavLinks = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

const NavTitle = styled.h2`
  color: ${props => props.theme.colors.white};
  border-bottom: ${props => `1px solid ${props.theme.colors.primary}`};
`;

const MobileNavLinks = ({ children }) => (
  <Container 
    modalComponent={() => (
      <NavLinks>
        <NavTitle>Menu</NavTitle>
        {children}
      </NavLinks>
    )}>
    <NavIcon />
  </Container>
);


export default MobileNavLinks;