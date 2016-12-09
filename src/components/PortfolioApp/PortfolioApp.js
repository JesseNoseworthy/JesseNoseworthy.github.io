import React, { Component } from 'react';
import styles from './PortfolioApp.css';
import Image from '../Image';
import Link from '../Link';
import Button from '../Button';

class PortfolioApp extends Component {
  render() {
    return (
      <div className={styles.PortfolioApp}>
        <Image src="https:unsplash.it/700/400" />
        <h1 className={styles.header}>It Works!</h1>
        <p>A work in progess by Jesse! Follow me on <Link href="https://github.com/JesseNoseworthy">GitHub</Link></p>
        <Button>Test</Button>
      </div>
    )
  }
}

export default PortfolioApp;