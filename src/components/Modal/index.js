import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Modal.css';
import Button from 'components/Button';
import CanonIcon from 'components/CanonIcon';

class Modal extends Component {
  render() {
    const { 
      className,
      children,
      onModalClose,
      isOpen,
      currentSegment
    } = this.props;

    return children ? ( 
      <div
        className={
          classNames(
            styles.Modal,
            {[styles.isOpen]: isOpen},
            styles[`Modal-${currentSegment}`],
            className
          )
        }
        tabIndex={0}>
        <Button
          className={styles.CloseButton}
          onClick={onModalClose}>
          <CanonIcon icon='Close' />
        </Button>
        {children}
      </div>
    ) :  null
  }
}

Modal.propTypes = {
  className: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default Modal;