import React, { Component } from 'react';
import styles from './Image.scss';

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