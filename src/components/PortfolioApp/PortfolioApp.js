import React, { Component } from 'react';
import styles from './PortfolioApp.scss';
import globalStyles from '../../globalStyles/index.scss';
import Hero from '../Hero';
import SocialIconGroup from '../SocialIconGroup';

class PortfolioApp extends Component {
  render() {

    const socialMediaAccounts = [
      { type: "GitHub", socialUrl: "https://github.com/JesseNoseworthy" },
      { type: "Twitter", socialUrl: "https://twitter.com/JesseNoseworthy" },
      { type: "Medium", socialUrl: "https://medium.com/@JesseNoseworthy" },
      { type: "mail", socialUrl: "mailto:noseworthyjesse@gmail.com" }
    ] 
    return (
      <div className={styles.PortfolioApp}>
        <SocialIconGroup socialMediaAccounts={socialMediaAccounts} />
      </div>
    )
  }
}

export default PortfolioApp;