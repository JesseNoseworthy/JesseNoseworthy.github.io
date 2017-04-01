import React, { Component } from 'react';
import styles from './NextButton.scss';
import Icon from '../Icon';

const NextButton = ({ iconType }) => (
  <div className={styles.nextButton}>
    <p>Learn More</p>
    <Icon variant="material">arrow_downward</Icon>
  </div>
);

export default NextButton;