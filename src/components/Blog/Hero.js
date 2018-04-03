import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';

const Container = styled.div`
  background-image: ${props => `url(${props.image}})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 65vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  ${media.tablet`align-items: center;`};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  background: ${props => props.theme.colors.fadedBlack};
  padding: 15px;
  font-size: 2rem;
  width: 100%;

  ${media.tablet`
    padding: 0 7px;
    width: initial;
    font-size: 3.6rem;
    margin-top: ${props => props.theme.values.navBarHeight};
  `};
`;

const Hero = ({ title, ...others }) => (
  <Container {...others}>
    {title && <Title>{title}</Title>}
  </Container>
);

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string.isRequired
};

export default Hero;