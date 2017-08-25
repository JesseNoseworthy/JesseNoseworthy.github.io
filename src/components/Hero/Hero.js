import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.variables.black};
  font-family: ${props => props.variables.fontFamily};
`;

const Hero = props => {
  console.log(props)
  return (
    <Container {...props}>
      {props.children}
    </Container>
  );
}

Hero.propTypes = {
  variables: PropTypes.object
};

export default Hero;
