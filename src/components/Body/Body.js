import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: ${props => props.variables.black};
  font-family: ${props => props.variables.fontFamily};
  background: ${props => props.variables.white};
  height: 100vh;
  width: 100vw;
`;

const Body = props => (
  <Container {...props}>
    {props.children}
  </Container>
);

Body.propTypes = {
  variables: PropTypes.object
};

export default Body;
