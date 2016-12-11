import React, { Component, PropTypes } from 'react';
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

Image.propTypes = {
  variant: React.PropTypes.string,
};

export default Image;