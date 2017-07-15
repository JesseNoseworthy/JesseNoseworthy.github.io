import React, { Component } from 'react';
import styles from './PortfolioApp.scss';
import '../../globalStyles/index.scss';
import appData from '../../app/data/data.json';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.PortfolioApp}>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default PortfolioApp;