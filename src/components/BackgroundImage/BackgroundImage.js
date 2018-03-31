import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import media from 'utils/media';
import Spinner from 'components/Spinner';

const Image = styled.figure`
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;

  ${props => props.desktopSrc && css`
    ${media.desktop`
      background-image: ${props => `url(${props.desktopSrc})`};
    `};
  `};
`;

const SpinnerWrapper = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class BackgroundImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { src } = this.props;

    if (src) {
      const img = document.createElement('img');
      img.src = src;
      img.onload = err => {
        this.setState({ isLoading: false });
      };
    }
  }

  render() {
    const { children, ...others } = this.props;
    const { isLoading } = this.state;

    return isLoading ? (
      <SpinnerWrapper {...others}>
        <Spinner />
      </SpinnerWrapper>
    ) : (
      <Image {...others}>
        {children}
      </Image>
    );
  }
}

export default BackgroundImage;