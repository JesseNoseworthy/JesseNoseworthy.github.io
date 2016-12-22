// This component will render a FaceBook, Twitter, LinkedIn, and GitHub icon

import React, { Component } from 'react';
import { map, trim } from 'lodash';
import styles from './SocialIconGroup.scss';
import classNames from 'classnames';
import SocialIcon from '../SocialIcon';

class SocialIconGroup extends Component {
  // getSocialAccounts(socialMediaAccounts) {
  //   return (
  //     {socialMediaAccounts.map(function(name, i){
  //       return (
  //         <SocialIcon 
  //           key={i}
  //           iconType={socialMediaAccounts[i].socialMediaOutlet}
  //           socialUrl={socialMediaAccounts[i].socialUrl}
  //           iconSize='2x'
  //         />
  //       );
  //     })}
  //   )
  // };
  render() {
    const {
      socialMediaAccounts,
      ...others
    } = this.props;

    return (
      <div {...others}>
        <h1>SocialIconGroup</h1>
        <SocialIcon 
          socialUrl="https://github.com"
          iconType="facebook"
          iconSize='2x'
        />
        {socialMediaAccounts.map(function(name, i){
          return (
            <SocialIcon 
              key={i}
              // iconType={socialMediaAccounts[i].socialMediaOutlet}
              iconType="test"
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