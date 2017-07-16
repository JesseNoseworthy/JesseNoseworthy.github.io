import React, { Component } from 'react';
import styles from './Hero.css';
import ResponsiveImage from 'components/ResponsiveImage';

class Hero extends Component {
  render() {

    const { image } = this.props.hero;

    return (
      <div>
        <h1>Hello</h1>
        <ResponsiveImage image={image} />
      </div>
    )
  }
}

export default Hero;