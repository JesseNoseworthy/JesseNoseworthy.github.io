import React, { Component } from 'react';
import styles from './ArrowIcon.scss';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import Link from '../Link';

class ArrowIcon extends Component {
  getDirection(direction) {
    if (direction === "up") {
      return "arrow-up"
    } else if (direction === "down") {
      return "arrow-down"
    } else if(direction === "left") {
      return "arrow-left"
    } else if(direction === "right") {
      return "arrow-right"
    }
  }

  render() {
    const {
      variant,
      destination,
      direction
    } = this.props

    const iconClass = classNames(styles.arrowIcon, styles[variant]);

    return (
      destination ? 
        <Link href={destination}>
          <FontAwesome
            className={iconClass}
            name={this.getDirection(direction)}
         />
        </Link> 
      : 
       <FontAwesome
         className={iconClass}
         name={this.getDirection(direction)}
      />
    )
  }
}

ArrowIcon.propTypes = {
  variant: React.PropTypes.string,
  direction: React.PropTypes.string.isRequired,
  destination: React.PropTypes.string,
}

export default ArrowIcon;