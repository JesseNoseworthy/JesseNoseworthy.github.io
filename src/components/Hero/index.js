import React from 'react';
import styles from './Hero.scss';
import NextButton from '../NextButton';
import BodyText from '../BodyText';

const Hero = ({ responsiveFlags }) => (
  <div className={styles.heroContainer}>
    <div className={styles.content}>
      <BodyText
        variant="hero"
        title="Jesse Noseworthy"
        subTitle="Front End Developer"
        responsiveFlags={responsiveFlags}
      />
      <NextButton 
        iconDirection='down' 
        destination='#'
      />
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