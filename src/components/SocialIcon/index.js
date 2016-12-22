import React, { Component } from 'react';
import styles from './SocialIcon.scss';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Link from '../Link';

class SocialIcon extends Component {
  render() {
    const {
      socialUrl,
      variant,
      iconType,
      iconSize,
      ...others
    } = this.props

    const iconClass = classNames(styles.socialIcon, styles[variant]);

    return (
      <Link href={socialUrl} {...others}>
        <FontAwesome
          className={iconClass}
          name={iconType.toLowerCase()}
          size={iconSize}
         />
      </Link>
    )
  }
}

SocialIcon.propTypes = {
  socialUrl: React.PropTypes.string,
  variant: React.PropTypes.string,
  iconType: React.PropTypes.string.isRequired,
  iconSize: React.PropTypes.any,
}

SocialIcon.getDefaultProps = {
  iconType: 'facebook',
  iconSize: '2x'
}

export default SocialIcon;