import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './IconLight.css';

const Icon = ({
  className,
  children,
  ...others
}) => (
  <i className={classNames(styles.Icon, styles[children], className)} {...others}></i>
);

Icon.propTypes = {
  className: PropTypes.string
};

export default Icon;