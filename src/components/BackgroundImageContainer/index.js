import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './BackgroundImageContainer.css';
import { getResponsiveItem } from '../../utils';

class BackgroundImageContainer extends Component {
  getBackground(tint, image) {
    const backgroundImage = `url(
      ${getResponsiveItem(
        image.desktopImageSrc,
        image.tabletImageSrc,
        image.mobileImageSrc
      )
    })`
    if (tint) {
      return `linear-gradient(${tint}, ${tint}), ${backgroundImage}`
    }
    return backgroundImage
  }

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

    const backgroundImageStyles = {
      background: this.getBackground(tint, image),
      ...inlineStyles
    }

    return (
      <div
        className={classNames(styles.BackgroundImageContainer, className)}
        style={backgroundImageStyles}
        aria-label={alt}
        {...others}>
        {children}
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