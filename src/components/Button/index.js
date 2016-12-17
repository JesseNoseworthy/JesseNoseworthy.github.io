import React, { Component, PropTypes } from 'react';
import styles from './Button.scss';

class Button extends Component {
  render() {
    const { 
      children,
      variant,
      ...others
    } = this.props;

    return (
      <button className={variant} {...others}>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: React.PropTypes.any,
  variant: React.PropTypes.string,
};

Button.defaultTypes = {
  children: '',
};

export default Button;