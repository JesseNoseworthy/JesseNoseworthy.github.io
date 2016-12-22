import React, { Component } from 'react';
import styles from './PortfolioApp.scss';
import globalStyles from '../../globalStyles/index.scss';
import Hero from '../Hero';
import SocialIconGroup from '../SocialIconGroup';
import data from '../../app/data/data.json';

class PortfolioApp extends Component {
  render() {
    console.log(data);
    return (
      <div className={styles.PortfolioApp}>
      </div>
    )
  }
}

export default PortfolioApp;