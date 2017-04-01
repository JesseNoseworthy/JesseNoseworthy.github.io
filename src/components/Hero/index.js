import React, { Component } from 'react';
import styles from './Hero.scss';
import Image from '../Image';
import Video from '../Video';
import BodyText from '../BodyText';

class Hero extends Component {
  render() {
    return (
      <div className={styles.heroContainer}>
        <div className={styles.content}>
          <BodyText
            variant="hero"
            title="Jesse Noseworthy"
            subTitle="Front End Developer"
          />
        </div>
      </div>
    )
  }
}

export default Hero;