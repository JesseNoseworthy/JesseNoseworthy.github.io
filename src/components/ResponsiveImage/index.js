import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ResponsiveImage.css';
import Image from 'components/Image';
import MediaQuery from 'react-responsive';

class ResponsiveImage extends Component {
  render() {
    const {
      className,
      image,
      animationType,
      ...others
    } = this.props;

    return (
      <div>
        <MediaQuery minWidth={1200}>
          <Image
            className={classNames(styles.ResponsiveImage, className)}
            src={image.desktopImageSrc}
            alt={image.alt}
            animationType={animationType}
            {...others}
          />
        </MediaQuery>
        <MediaQuery maxWidth={1199} minWidth={768}>
          <Image
            className={classNames(styles.ResponsiveImage, className)}
            src={image.tabletImageSrc || image.desktopImageSrc}
            alt={image.alt}
            animationType={animationType}
            {...others}
          />
        </MediaQuery>
        <MediaQuery maxWidth={767}>
          <Image
            className={classNames(styles.ResponsiveImage, className)}
            src={image.mobileImageSrc || image.desktopImageSrc}
            alt={image.alt}
            animationType={animationType}
            {...others}
          />
        </MediaQuery>
      </div>
    );
  }
}

ResponsiveImage.propTypes = {
  className: PropTypes.string,
  desktopImageSrc: PropTypes.string,
  tabletImageSrc: PropTypes.string,
  mobileImageSrc: PropTypes.string,
  animationType: PropTypes.string,
};

export default ResponsiveImage;