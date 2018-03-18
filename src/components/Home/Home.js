import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'components/Image';
import media from 'utils/media';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  ${media.desktop`flex-direction: row;`};
`;

const About = styled.div`
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${media.desktop`
    width: 50%;
    justify-content: center;
    border-right: 5px solid rgb(250, 250, 250);
  `};
`;

const Headshot = styled(Image)`
  height: 50%;
  border-bottom: 10px solid rgb(250, 250, 250);
  ${media.desktop`
    height: 100%;
    width: 50%;
    border-left: 5px solid rgb(250, 250, 250);
    border-bottom: none;
  `};
`;

const Home = (
  <Container>
    <About>
      <h2>Jesse Noseworthy</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum quam eu rutrum accumsan. Sed at nisl non tortor placerat dapibus sit amet non erat.

        <br /> 
        <br /> 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras bibendum lacus venenatis, maximus sapien quis, porttitor mauris.Fusce laoreet consequat ipsum a lacinia.
      </p>
    </About>
    <Headshot src='https://unsplash.it/400/400' />
  </Container>
);

export default Home;