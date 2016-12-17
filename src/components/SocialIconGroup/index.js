// This component will render a FaceBook, Twitter, LinkedIn, and GitHub icon

import React, { Component } from 'react';
import { map, trim } from 'lodash';
import styles from './SocialIconGroup.scss';
import classNames from 'classnames';
import SocialIcon from '../SocialIcon';

class SocialIconGroup extends Component {
  getSocialAccounts(social) {
    // Loop through {social} and output an icon for each
  }
  render() {
    const {
      social,
      ...others
    } = this.props;

    return (
      <div {...others}>
        <h1>SocialIconGroup</h1>
        {this.getSocialAccounts(social)}
      </div>
    )
  }
}

export default SocialIconGroup;