import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 90%;
  background: rgb(202, 104, 94);
`;

const TabPanels = ({ activeIndex, children }) => (
  <Container>
    {children[activeIndex]}
  </Container>
);

export default TabPanels;