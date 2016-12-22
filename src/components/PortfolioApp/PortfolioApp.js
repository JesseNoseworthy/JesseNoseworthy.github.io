import React, { Component } from 'react';
import styles from './PortfolioApp.scss';
import globalStyles from '../../globalStyles/index.scss';
import Hero from '../Hero';
import SocialIconGroup from '../SocialIconGroup';

class PortfolioApp extends Component {
  render() {

    const socialMediaAccounts = [
      { socialMediaOutlet: "GitHub", socialUrl: "https://github.com/JesseNoseworthy" },
      { socialMediaOutlet: "Twitter", socialUrl: "https://twitter.com/JesseNoseworthy" },
      { socialMediaOutlet: "Medium", socialUrl: "https://medium.com/@JesseNoseworthy" },
      { socialMediaOutlet: "Gmail", socialUrl: "mailto:noseworthyjesse@gmail.com"  }
    ] 
    return (
      <div className={styles.PortfolioApp}>
        <Hero />
        <SocialIconGroup 
          socialMediaAccounts={socialMediaAccounts} />
      </div>
    )
  }
}

export default PortfolioApp;