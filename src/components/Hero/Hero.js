import PropTypes from 'prop-types';
import React from 'react';
import BackgroundImage from 'components/BackgroundImageContainer';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  padding: 25px;
  color: ${props => props.variables.secondaryColor};
  background: ${props => props.variables.primaryColor};
`;

const Hero = ({ ...props }) => (
  <Container>
    <BackgroundImage full={true} {...props}>
      <Title variables={props.variables}>{props.bodyText.title}</Title>
    </BackgroundImage>
  </Container>
);

Hero.propTypes = {
  variables: PropTypes.object
};

export default Hero;
