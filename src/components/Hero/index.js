import React, { Component } from 'react';
import styles from './Hero.css';
import Image from '../Image';
import Link from '../Link';
import Button from '../Button';
import BodyText from '../BodyText';

class Hero extends Component {
  render() {
    return (
      <div className={styles.heroContainer}>
        <Image variant="hero" src="https:unsplash.it/700/400" />
        <BodyText
          title="Hello, world!"
          content="Content"
        />
        <div className={styles.heroText}>
          <h1>It Works!</h1>
          <p>A work in progess by Jesse! Follow me on <Link href="https://github.com/JesseNoseworthy">GitHub</Link></p>
        </div>
      </div>
    )
  }
}

export default Hero;