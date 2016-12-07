import React, { Component } from 'react';
import styles from './PortfolioApp.css';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.PortfolioApp}>
        <h1 className={styles.tes}>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>A work in progess by Jesse!</p>
      </div>
    )
  }
}

export default PortfolioApp;