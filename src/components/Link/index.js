import React, { Component } from 'react';
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
      <a href={href} {...others}>
        {children}
      </a>
    );
  }
}

export default Link;