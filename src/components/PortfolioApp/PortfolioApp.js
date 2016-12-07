import React, { Component } from 'react';
import styles from './PortfolioApp.css';
import Image from '../Image';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.PortfolioApp}>
        <Image src="https:unsplash.it/700/400" />
        <h1 className={styles.header}>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>A work in progess by Jesse!</p>
      </div>
    )
  }
}

export default PortfolioApp;