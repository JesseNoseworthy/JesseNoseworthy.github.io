import React, { Component } from 'react';
import styles from './NextButton.scss';
import Link from '../Link';
import Icon from '../Icon';

class NextButton extends Component {
  getDirection(iconDirection) {
    if (iconDirection === 'up') {
      return 'arrow_upward'
    } else if (iconDirection === 'down') {
      return 'arrow_downward'
    } else if(iconDirection === 'left') {
      return 'arrow_back'
    } else if(iconDirection === 'right') {
      return 'arrow_forward'
    } else {
      return iconDirection
    }
   }
  render() {


    const { iconDirection, destination } = this.props;

    return (
      <Link className={styles.nextButton} href={destination}>
        <p>Learn More</p>
        <Icon variant="material">{this.getDirection(iconDirection)}</Icon>
      </Link>
    );
  }
}

NextButton.propTypes = {
  iconDirection: React.PropTypes.string,
  destination: React.PropTypes.string
};

NextButton.defaultProps = {
  iconDirection: 'arrow_downward'
}

export default NextButton;