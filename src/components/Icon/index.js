import React from 'react';
import styles from './Icon.scss';

const Icon = ({ children, variant, ...others }) => (
  <i className={styles[variant]} {...others}>
    {children}
  </i>
);

Icon.propTypes = {
  children: React.PropTypes.any,
  variant: React.PropTypes.string,
};

export default Icon;