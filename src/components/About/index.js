import React, { Component } from 'react';
import styles from './About.scss';

class About extends Component {
  render() {
    const { 
      children,
      variant,
      ...others
    } = this.props;

    return (
      <div className={styles.About} {...others}>
        <h1>Hello</h1>
      </div>
    );
  }
}

About.propTypes = {
  variant: React.PropTypes.string,
};

export default About;