import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ResponsiveImage.css';
import Image from 'components/Image';

class ResponsiveImage extends Component {
  getResponsiveImageSrc() {
    const {
      isDesktopAll,
      isTablet,
      isMobile,
      desktopImageSrc,
      tabletImageSrc,
      mobileImageSrc
    } = this.props;

    if (isDesktopAll) { return desktopImageSrc }
    else if (isTablet) { return tabletImageSrc || desktopImageSrc }
    else if (isMobile) { return mobileImageSrc || desktopImageSrc }
  }

  render() {
    const {
      className,
      alt,
      animationType,
      ariaHidden,
      ...others
    } = this.props;

    return (
      <Image
        className={classNames(styles.ResponsiveImage, className)}
        src={this.getResponsiveImageSrc()}
        ariaHidden={ariaHidden}
        alt={alt}
        animationType={animationType}
        {...others}
      />
    );
  }
}

ResponsiveImage.propTypes = {
  className: PropTypes.string,
  desktopImageSrc: PropTypes.string,
  tabletImageSrc: PropTypes.string,
  mobileImageSrc: PropTypes.string,
  alt: PropTypes.any.isRequired,
  isDesktopAll: PropTypes.bool,
  isTablet: PropTypes.bool,
  isMobile: PropTypes.bool,
  animationType: PropTypes.string,
  ariaHidden: PropTypes.string
};

export default ResponsiveImage;