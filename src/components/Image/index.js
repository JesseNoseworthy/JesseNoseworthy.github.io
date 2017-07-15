import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Image.css';

const Image = ({
  className,
  src,
  alt,
  animationType,
  ariaHidden
}) => (
  <img
    data-aos={animationType}
    className={classNames(styles.Image, className)}
    src={src}
    alt={alt}
    aria-hidden={ariaHidden}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  animationType: PropTypes.string,
  ariaHidden: PropTypes.string
};

export default Image;