import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import media from 'utils/media';

const Container = styled.button`
  background: none;
  border: none;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.white};
  font-size: 1.2rem;
  margin: 0 5px;
  height: ${props => `calc(${props.theme.values.navBarHeight} - (${props.theme.values.navBarHeight} / 4))`};
  width: 100%;
  text-align: left;

  ${props => !props.isActive && css`
    cursor: pointer;
  `};

  ${media.desktop`
    height: initial;
    width: initial;
  `};
`;


class Tab extends Component {
  render() {
    const {
      children,
      onSelect,
      isDisabled,
      ...others
    } = this.props;

    return (
      <Container onClick={isDisabled ? null : onSelect} {...others}>
        {children}
      </Container>
    )
  }
}
export default Tab;