import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% { opacity: 0.2; }
  100% { opacity: 1; }
`;

const SpinnerContainer = styled.div`
  margin: 0;
  width: 85px;
  height: 85px;
  position: relative;
`;

const Dash = styled.div`
  position: absolute;
  left: calc(50% - 5px);
  top: calc(50% + 20px);
  width: 8px;
  height: 20px;
  border-radius: 5px;
  background: #9a9a9a;
  transform-origin: 4px -20px;
  transform: rotate(${ props => props.rotation }deg);
  animation: 600ms ease-in ${fadeIn} infinite alternate;
  animation-delay: ${props => props.animationDelay}ms;
`;

const getRotation = (multiplier) => {
  return 30 * parseInt(multiplier);
};

const getAnimationDelay = (multiplier) => {
  return 50 * parseInt(multiplier);
};

class Spinner extends Component {
  render() {
    const { className } = this.props;
    return (
      <SpinnerContainer className={className}>
          {[...Array(12).keys()].map(id =>
            <Dash
              key={id}
              id={id}
              rotation={getRotation(id)}
              animationDelay={getAnimationDelay(id)}
            />
          )}
        </SpinnerContainer>
    );
  }
}

Spinner.defaultProps = {};

export default Spinner;
