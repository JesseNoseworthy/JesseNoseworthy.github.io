import React, { Component } from 'react';
import styles from './PortfolioApp.scss';
import '../../globalStyles/index.scss';
import Hero from '../Hero';
import About from '../About';
import appData from '../../app/data/data.json';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.PortfolioApp}>
        <Hero />
        <About />
      </div>
    )
  }
}

export default PortfolioApp;