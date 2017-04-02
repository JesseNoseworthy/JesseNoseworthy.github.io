import React, { Component, PropTypes } from 'react';
import styles from './Video.scss';

class Video extends Component {
  render() {
    const {
      src,
      variant
    } = this.props;

    return (
      <video autoPlay loop className={styles[variant]}>
        <source src={src} type='video/webm; codecs="vp8.0, vorbis"' />
        <source src={src} type='video/ogg; codecs="theora, vorbis"' />
        <source src={src} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
        <p>Sorry, a video was meant to be played here but an error has occured.</p>
      </video>
    );
  }
}

Video.propTypes = {
  variant: PropTypes.string,
  src: PropTypes.string,
};

export default Video;
