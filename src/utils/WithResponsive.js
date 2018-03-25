import React, { Component } from 'react';
import {
  isDesktop,
  isTablet,
  isMobile
} from 'utils';

class WithResponsive extends Component {
  constructor(props) {
    super(props);
    this.assignResponsiveFlags = this.assignResponsiveFlags.bind(this);
    this.updateResponsiveFlags = this.updateResponsiveFlags.bind(this);

    this.state = this.assignResponsiveFlags();
  }

  assignResponsiveFlags() {
    return {
      isDesktop: isDesktop(),
      isTablet: isTablet(),
      isMobile: isMobile()
    }
  }
  
  updateResponsiveFlags() {
    this.setState(this.assignResponsiveFlags());
  }
  
  componentWillMount() {
    this.updateResponsiveFlags();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateResponsiveFlags);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateResponsiveFlags);
  }
  
  render() {
    return React.Children.map(this.props.children, (child, index) => React.cloneElement(child, { deviceFlags: { ...this.state } }))
  }
}

export default WithResponsive;