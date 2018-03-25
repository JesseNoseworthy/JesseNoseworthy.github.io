import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const TabPanels = ({ activeIndex, children }) => (
  <Container>
    {children[activeIndex]}
  </Container>
);

export default TabPanels;