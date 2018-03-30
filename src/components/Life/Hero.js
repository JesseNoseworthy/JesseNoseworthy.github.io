import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-image: ${props => `url(${props.image}})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  background: ${props => props.theme.colors.fadedBlack};
  padding: 0 7px;
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