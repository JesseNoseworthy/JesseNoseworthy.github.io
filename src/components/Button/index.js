import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Button.css';

const Button = ({
  className,
  children,
  handleClick,
  isActive,
  isAnimating,
  currentSegment,
  ...others
}) => (
  <button
    className={classNames(
      styles.Button,className,
      {[styles.AnimatingButton]: isAnimating},
      {[styles[`AnimatingButton-${currentSegment}`]]: isAnimating}
    )} {...others}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  isAnimating: PropTypes.bool,
  handleClick: PropTypes.func,
  currentSegment: PropTypes.string,
  isActive: PropTypes.bool
};

Button.defaultProps = {
  isAnimating: false
}

export default Button;