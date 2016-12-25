// This component will render a FaceBook, Twitter, LinkedIn, and GitHub icon

import React, { Component } from 'react';
import styles from './SocialIconGroup.scss';
import SocialIcon from '../SocialIcon';

class SocialIconGroup extends Component {
  render() {
    const {
      socialMediaAccounts,
      ...others
    } = this.props;
        return (
          <div className={styles.SocialIconGroup} {...others}>
            {Object.keys(socialMediaAccounts).map(function(i) {
              const getSocialType = socialMediaAccounts[i].type === 'email' ? 'envelope' : socialMediaAccounts[i].type;
              return (
                <SocialIcon 
                  key={i}
                  iconType={getSocialType}
                  socialUrl={socialMediaAccounts[i].socialUrl}
                  iconSize='2x'
                />
              )
            })}
          </div>
        )
  }
}

SocialIconGroup.propTypes = {
  socialMediaAccounts: React.PropTypes.object
};

SocialIconGroup.defaultTypes = {
  socialMediaAccounts: {}
};

export default SocialIconGroup;