import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Hero = ({ children, ...others }) => (
  <Container>
    {React.Children.map(children, child => React.cloneElement(child))}
  </Container>
);

Hero.propTypes = {
  variables: PropTypes.object
};

export default Hero;
