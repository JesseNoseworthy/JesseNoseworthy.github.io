import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './NewIcon.css';

const NewIcon = ({
  className,
  currentLanguage,
  children
}) => (
  <div className={
    classNames(
      styles.NewIcon, 
      className,
      { [styles.NewIconFrench]: currentLanguage === 'fr' }
    )
  }>
    {children}
  </div>
);

NewIcon.propTypes = {
  className: PropTypes.string,
  currentLanguage: PropTypes.string
};

export default NewIcon;