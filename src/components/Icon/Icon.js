import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Icon.css';

const Icon = ({
  className,
  children,
  ...others
}) => (
  <i className={classNames(styles.Icon, className)} {...others}>
    {children}
  </i>
);

Icon.propTypes = {
  className: PropTypes.any
};

export default Icon;