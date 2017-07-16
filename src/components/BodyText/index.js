import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './BodyText.css';


class BodyText extends Component {
  render() {
    const {
      titlePriority,
      className,
      ...others
    } = this.props;

    const {
      title
    } = this.props.bodyText;

    const CustomTitleTag = `h${titlePriority}`;

    return (
      <div className={classNames(styles.BodyText, className)} {...others}>
        { title ?
          <CustomTitleTag>{title}</CustomTitleTag>
        : null }
      </div>
    )
  }
}

BodyText.propTypes = {
  titlePriority: PropTypes.number
};

BodyText.defaultProps = {
  titlePriority: 2
}

export default BodyText;