import React from 'react';
import styles from './Hero.scss';
import Image from '../Image';

const Hero = ({ responsiveFlags }) => (
  <div className={styles.heroContainer}>
    <div className={styles.content}>
      <Image className={styles.headshot} src={require('../../app/assets/headshot-rectangle.png')}/>
      <h1><span className="highlight">Hi,</span> I'm Jesse and I'm a Web Developer</h1>
    </div>
  </div>
);

Hero.propTypes = {
  responsiveFlags: React.PropTypes.shape({
    isMobile: React.PropTypes.bool,
    isTablet: React.PropTypes.bool,
    isDesktop: React.PropTypes.bool
  })
};

export default Hero;