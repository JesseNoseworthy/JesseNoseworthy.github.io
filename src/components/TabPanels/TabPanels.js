import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90%;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.14);
  border-bottom: none;
  overflow: scroll;
`;

const TabPanels = ({ activeIndex, children }) => (
  <Container>
    {children[activeIndex]}
  </Container>
);

export default TabPanels;