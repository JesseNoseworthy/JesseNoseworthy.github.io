import React, { Component, PropTypes } from 'react';
import styles from './Link.css';

class Link extends Component {
  render() {
    const { 
      href,
      children,
      variant,
      ...others
    } = this.props;

    return (
      <a className={variant} href={href} {...others}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.any,
  variant: React.PropTypes.string,
};

export default Link;