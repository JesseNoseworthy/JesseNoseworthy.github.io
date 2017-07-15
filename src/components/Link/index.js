import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Link.css';
import { isExternalLink } from '../../utils';

const Link = ({
  className,
  variant,
  href,
  children,
  isNav,
  isWhite,
  currentSegment,
  ...others
}) => (
    <a  href={href}
      className={classNames(styles.Link, variant, className)}
      target={isExternalLink(href) ? '_blank' : '_self'}
      {...others}>
    {children}
  </a>
);

Link.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.any,
  isNav: PropTypes.bool,
};

Link.defaultProps = {
  isNav: false,
}

export default Link;