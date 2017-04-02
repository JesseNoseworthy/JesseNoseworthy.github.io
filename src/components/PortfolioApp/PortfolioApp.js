import React, { Component } from 'react';
import $ from 'jquery';
import styles from './PortfolioApp.scss';
import '../../globalStyles/index.scss';
import Hero from '../Hero';
import About from '../About';
import appData from '../../app/data/data.json';
import {
  isDesktop,
  isTablet,
  isMobile
} from '../../utils';

const PortfolioApp = React.createClass({
  updateDimensions() {
    this.setState({
      isDesktop: isDesktop(),
      isTablet: isTablet(),
      isMobile: isMobile()
    });
  },
  componentWillMount() {
    this.updateDimensions();
  },
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  },
  render() {
    const {
      isDesktop,
      isTablet,
      isMobile
    } = this.state;

    const responsiveFlags = { 
      isDesktop,
      isTablet,
      isMobile
    };

    return (
      <div className={styles.PortfolioApp}>
        <Hero responsiveFlags={responsiveFlags} />
      </div>
    )
  }
});

export default PortfolioApp;