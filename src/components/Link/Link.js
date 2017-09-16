import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children, ...others }) => ( <a href={href} {...others}>{children}</a> );

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any
};

export default Link;