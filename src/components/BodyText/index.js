import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './BodyText.scss';

class BodyText extends Component {

  render() {
    const {
      title, 
      subTitle, 
      content,
      variant,
      highlightTitle,
      highlightSubTitle,
      highlightContent,
      responsiveFlags,
      ...others
    } = this.props

    const bodyTextClassName = classNames(
      styles.bodyText,
      styles[variant], {
        [styles.isMobile]: responsiveFlags.isMobile,
        [styles.isTablet]: responsiveFlags.isTablet,
        [styles.isDesktop]: responsiveFlags.isDesktop
      }
    );
    return (
      <div className={bodyTextClassName} {...others}>
        { title ? <h1 className={highlightTitle ? styles.highlight : null}>{title}</h1> : null}
        { subTitle ? <h4 className={highlightSubTitle ? styles.highlight : null}>{subTitle}</h4> : null}
        { content ? <p className={highlightContent ? styles.highlight : null}>{content}</p> : null}
      </div>
    )
  }
}

BodyText.propTypes = {
  variant: React.PropTypes.string,
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  content: React.PropTypes.string,
  highlightTitle: React.PropTypes.bool,
  highlightSubTitle: React.PropTypes.bool,
  highlightContent: React.PropTypes.bool,
  responsiveFlags: React.PropTypes.shape({
    isMobile: React.PropTypes.bool,
    isTablet: React.PropTypes.bool,
    isDesktop: React.PropTypes.bool
  })
};

export default BodyText;