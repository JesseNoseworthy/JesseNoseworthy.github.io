import React, { Component } from 'react';
import styles from './PortfolioApp.scss';
import '../../globalStyles/index.scss';
import SocialIconGroup from '../SocialIconGroup';
import appData from '../../app/data/data.json';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.PortfolioApp}>
        <SocialIconGroup 
          socialMediaAccounts={appData.socialMedia}
        />
      </div>
    )
  }
}

export default PortfolioApp;