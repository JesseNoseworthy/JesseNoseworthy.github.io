import React, { Component } from 'react';
import styles from './Hero.css';
import BackgroundImageContainer from 'components/BackgroundImageContainer';

class Hero extends Component {
  render() {

    const {
      image,
      alt
    } = this.props.hero;

    return (
      <BackgroundImageContainer
        className={styles.Hero}
        image={image}
        alt={alt}
        tint='rgba(0, 0, 0, 0.45)'>
        <h1>Hello</h1>
      </BackgroundImageContainer>
    )
  }
}

export default Hero;