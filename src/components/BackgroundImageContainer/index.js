import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './BackgroundImageContainer.css';

class BackgroundImageContainer extends Component {
  getBackground(tint, image) {
    if (tint) {
      return (
        `linear-gradient(${tint}, ${tint}),
        url(${image})`
      )
    }
    return `url(${image})`
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
  image: PropTypes.string,
  alt: PropTypes.string
};

export default BackgroundImageContainer;