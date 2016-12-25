import React, { Component } from 'react';
import styles from './Hero.scss';
import Image from '../Image';
import Link from '../Link';
import BodyText from '../BodyText';

class Hero extends Component {
  render() {
    return (
      <div className={styles.heroContainer}>
        <BodyText
          title="Hello, world!"
          content="Content"
        />
        <Image src={require("../../app/assets/headshot.jpg")} />
      </div>
    )
  }
}

export default Hero;