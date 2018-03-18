import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div``;

const PortfolioItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;
  margin: 50px;
`;

const PortfolioItemContent = styled.div`
  width: calc(50% - 15px);
`;

const PortfolioItemImage = styled.img`
  height: 200px;
`;

const Portfolio = (
  <Container>
    <PortfolioItem>
      <PortfolioItemContent>
        <h3>Canon.ca</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan.</p>
        <a href='#'>See it Live</a>
      </PortfolioItemContent>
      <PortfolioItemImage src='https://unsplash.it/400/400' />
    </PortfolioItem>
  </Container>
);

export default Portfolio;