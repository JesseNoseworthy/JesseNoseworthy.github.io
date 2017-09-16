import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const Background = styled.div`
  color: ${props => props.variables.black};
  background-image: url(${props => props.image.src});
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  flex-direction: inherit;
  flex-basis: inherit;
  padding: 10%;
  margin: inherit;
  ${props => props.full && css`
    height: 100vh;
    width: 100vw;
  `}
`;

const BackgroundImageContainer = ({ ...props }) => (
  <Background {...props}>
    {props.children}
  </Background>
);

BackgroundImageContainer.propTypes = {
  variables: PropTypes.object
};

export default BackgroundImageContainer;
