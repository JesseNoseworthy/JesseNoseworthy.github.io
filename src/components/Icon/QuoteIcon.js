import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './QuoteIcon.css';

class QuoteIcon extends Component {
  getCharacter(currentLanguage) {
    return currentLanguage === 'fr' ? '&laquo;' : '&ldquo;'
  }

  render() {
    const {
      className,
      currentLanguage,
      ...others
    } = this.props;

    return (
      <i
        className={classNames(styles.QuoteIcon, className)}
        dangerouslySetInnerHTML={{ __html: this.getCharacter(currentLanguage) }}
        {...others}
      />
    )
  }
}

QuoteIcon.propTypes = {
  className: PropTypes.any,
  currentLanguage: PropTypes.string
};

QuoteIcon.defailtProps = {
  currentLanguage: 'en'
};

export default QuoteIcon;