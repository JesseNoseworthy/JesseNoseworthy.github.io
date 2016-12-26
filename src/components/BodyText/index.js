import React, { Component } from 'react';
import styles from './BodyText.scss';

class BodyText extends Component {
  render() {
    const {
      title, 
      subTitle, 
      content,
      variant,
      ...others
    } = this.props

    return (
      <div className={styles.bodyText, styles[variant]} {...others}>
        { title ? <h1>{title}</h1> : null}
        { subTitle ? <h2>{subTitle}</h2> : null}
        { content ? <h5>{content}</h5> : null}
      </div>
    )
  }
}

BodyText.propTypes = {
  title: React.PropTypes.string,
  subTitle: React.PropTypes.string,
  content: React.PropTypes.string,
};

export default BodyText;