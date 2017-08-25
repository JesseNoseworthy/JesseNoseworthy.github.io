import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
// import styles from './BackgroundImageContainer.css';
import { getResponsiveItem } from '../../utils';

const Name = styled.div`
  padding: 10px;
  font-weight: bold;
  line-height: 1.2;
  height: 40px;
  color: pink;
`;


class BackgroundImageContainer extends Component {
  render() {
    const {
      image,
      alt,
      inlineStyles,
      children,
      className,
      tint,
      ...others
    } = this.props;

    return (
      <div>
        <Name>Hello, Name styles</Name>
      </div>
    );
  }
}

BackgroundImageContainer.propTypes = {
  className: PropTypes.string,
  image: PropTypes.shape({
    desktopImageSrc: PropTypes.string,
    tabletImageSrc: PropTypes.string,
    mobileImageSrc: PropTypes.string,
    imageAriaText: PropTypes.string
  }),
  alt: PropTypes.string
};

export default BackgroundImageContainer;