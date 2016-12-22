// This component will render a FaceBook, Twitter, LinkedIn, and GitHub icon

import React, { Component } from 'react';
import { map, trim } from 'lodash';
import styles from './SocialIconGroup.scss';
import classNames from 'classnames';
import SocialIcon from '../SocialIcon';

class SocialIconGroup extends Component {

  // This is currently broken due to the following error:
  // "Objects are not valid as a React child"

  render() {
    const {
      socialMediaAccounts,
      ...others
    } = this.props;
        return (
          <div>
            {_.forEach(socialMediaAccounts, function (article) {
              const getSocialType = article.type == 'email' ? 'envelope' : article.type;
              return (
                <SocialIcon 
                  iconType={getSocialType}
                  socialUrl={article.socialUrl}
                  iconSize='2x'
                />
              );
            })}
          </div>
        )
  }
}

export default SocialIconGroup;