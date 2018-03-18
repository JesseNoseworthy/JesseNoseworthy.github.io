import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import PortfolioItem from './PortfolioItem';

const Container = styled.div`
  height: 100%;
  padding: 40px;
`;

const Header = styled.header``;

const PortfolioList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Portfolio = (
  <Container>
    <Header>
      <h2>What I've Worked on!</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan.</p>
    </Header>
    <PortfolioList>
      <PortfolioItem
        title='canon'
        demoUrl='#'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan.'
      />
      <PortfolioItem
        title='canon'
        demoUrl='#'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan.'
      />
      <PortfolioItem
        title='canon'
        demoUrl='#'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan.'
      />
    </PortfolioList>
  </Container>
);

export default Portfolio;