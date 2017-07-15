import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Svg.css';

class Svg extends Component {
  parseSource(src) {
    return { __html: src };
  }

  render() {
    const {
      src,
      className,
      ...others
    } = this.props;

    return (
      <div
        className={classNames(styles.Svg, className)}
        dangerouslySetInnerHTML={this.parseSource(src)}
        {...others}
      />
    );
  }
}

Svg.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Svg;