import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  overflow: scroll;
`;

const TabPanels = ({ activeIndex, children }) => (
  <Container>
    {children[activeIndex]}
  </Container>
);

export default TabPanels;