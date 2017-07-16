import React, { Component } from 'react';
import styles from './Hero.css';
import Image from 'components/Image';
import BodyText from 'components/BodyText';

class Hero extends Component {
  render() {

    const { image, bodyText } = this.props.hero;

    return (
      <div className={styles.Hero}>
        <BodyText bodyText={bodyText} />
        <Image src={image.src} alt={image.alt} />
      </div>
    )
  }
}

export default Hero;