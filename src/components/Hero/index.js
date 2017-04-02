import React, { Component } from 'react';
import styles from './Hero.scss';
import Image from '../Image';
import NextButton from '../NextButton';
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
          <NextButton 
            iconDirection='down' 
            destination='#'
          />
        </div>
      </div>
    )
  }
}

export default Hero;