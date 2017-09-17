import PropTypes from 'prop-types';
import React from 'react';
import Image from 'components/Image';
import SubContent from 'components/HeroSubContent';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${media.tablet`
    padding-top: 50px;
  `};
`;

const BodyText = styled.div`
  width: 100%;
  padding: 0 20px;
  ${media.tablet`
    width: auto;
    margin-left: 25px;
  `};
`;

const Title = styled.h1`
  color: ${props => props.variables.black};
  font-size: 38px;
  margin: 0;
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 25px;
  width: 175px;
  height: 175px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tablet`
    max-width: 50%;
    margin-right: 25px;
  `};
`;


const Hero = ({ variables, bodyText, image }) => (
  <Container>
    <ImageContainer>
      <Image image={image} isRound={true} />
    </ImageContainer>
    <BodyText>
      <Title variables={variables}>{bodyText.title}</Title>
      <SubContent variables={variables} />
    </BodyText>
  </Container>
);

Hero.propTypes = {
  variables: PropTypes.object
};

export default Hero;
