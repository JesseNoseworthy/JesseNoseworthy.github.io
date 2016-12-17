import React, { Component } from 'react';
import styles from './PortfolioApp.scss';
import globalStyles from '../../globalStyles/index.scss';
import Hero from '../Hero';
import SocialIconGroup from '../SocialIconGroup';

class PortfolioApp extends Component {
  render() {

    const socialMediaAccounts = [
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
      {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'}
    ]
    return (
      <div className={styles.PortfolioApp}>
        <Hero />
        <SocialIconGroup 
          social={socialMediaAccounts} />
      </div>
    )
  }
}

export default PortfolioApp;