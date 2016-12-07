import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <img {...this.props} />
    );
  }
}

export default Image;