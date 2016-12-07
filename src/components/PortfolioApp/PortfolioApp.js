import React, { Component } from 'react';
import styles from '../../index.scss';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.app}>
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.redBg}>module</span> local styles.</p>
        <p>A work in progess by Jesse!</p>
      </div>
    )
  }
}

export default PortfolioApp;