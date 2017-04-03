import React, { Component } from 'react';
import styles from './About.scss';
import BodyText from '../BodyText';
import Image from '../Image';

class About extends Component {
  render() {
    const {
      responsiveFlags,
      ...others
    } = this.props;

    return (
      <div className={styles.About} {...others}>
        <Image className={styles.AboutImage} src={require('../../app/assets/headshot.jpg')}/>
        <BodyText
          responsiveFlags={responsiveFlags}
          className={styles.AboutText}
          variant="about"
          highlightTitle={true}
          title="About Me"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque reiciendis, dignissimos similique blanditiis animi nihil. Temporibus voluptate, aliquid laborum asperiores blanditiis. Sunt deleniti alias odio voluptates, tenetur similique nemo est!"
        />
      </div>
    );
  }
}

About.propTypes = {
  variant: React.PropTypes.string,
};

export default About;