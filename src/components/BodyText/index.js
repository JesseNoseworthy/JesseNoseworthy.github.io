import React, { Component } from 'react';
import styles from './BodyText.scss';

class BodyText extends Component {
  render() {
    const {
      title, 
      subTitle, 
      content,
      ...others
    } = this.props

    return (
      <div className={styles.BodyText}>
        { title ? <h1>{title}</h1> : null}
        { subTitle ? <h2>{subTitle}</h2> : null}
        { content ? <p>{content}</p> : null}
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