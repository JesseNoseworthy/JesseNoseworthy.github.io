// This component will render a FaceBook, Twitter, LinkedIn, and GitHub icon

import React, { Component } from 'react';
import { map, trim } from 'lodash';
import styles from './SocialIconGroup.scss';
import classNames from 'classnames';
import SocialIcon from '../SocialIcon';

class SocialIconGroup extends Component {
  render() {
    const {
      socialMediaAccounts,
      ...others
    } = this.props;
    return (
      <div {...others}>
        {socialMediaAccounts.map(function(name, i){
          const getSocialType = socialMediaAccounts[i].type == 'email' ? 'envelope' : socialMediaAccounts[i].type;
          return (
            <SocialIcon 
              key={i}
              iconType={getSocialType}
              socialUrl={socialMediaAccounts[i].socialUrl}
              iconSize='2x'
            />
          );
        })}
      </div>
    )
  }
}

export default SocialIconGroup;