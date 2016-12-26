import React, { Component } from 'react';
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
      ...others
    } = this.props

    return (
      <div className={styles.bodyText, styles[variant]} {...others}>
        { title ? <h1 className={highlightTitle ? styles.highlight : null}>{title}</h1> : null}
        { subTitle ? <h5 className={highlightSubTitle ? styles.highlight : null}>{subTitle}</h5> : null}
        { content ? <p className={highlightContent ? styles.highlight : null}>{content}</p> : null}
      </div>
    )
  }
}

BodyText.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  content: React.PropTypes.string,
  highlightTitle: React.PropTypes.bool,
  highlightSubTitle: React.PropTypes.bool,
  highlightContent: React.PropTypes.bool,
};

export default BodyText;