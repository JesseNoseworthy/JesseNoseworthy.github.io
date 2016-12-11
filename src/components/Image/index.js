import React, { Component } from 'react';
import styles from './Image.css';

class Image extends Component {
  render() {

    const { 
      variant,
      ...others
    } = this.props;

    return (
      <img className={styles[variant]} {...others} />
    );
  }
}

export default Image;