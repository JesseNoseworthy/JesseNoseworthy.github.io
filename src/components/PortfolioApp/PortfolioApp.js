import React, { Component } from 'react';
import styles from './PortfolioApp.css';
import globalStyles from '../../globalStyles/index.css';
import Hero from '../Hero';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.PortfolioApp}>
        <Hero />
      </div>
    )
  }
}

export default PortfolioApp;