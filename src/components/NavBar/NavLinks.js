import React, { Component } from 'react';
import NavLink from './NavLink';
import DesktopNavLinks from './DesktopNavLinks';
import MobileNavLinks from './MobileNavLinks';

class NavLinks extends Component {
  getNavLinks(links) {
    return links.map(link => <NavLink to={link.path} key={link.id}>{link.label}</NavLink>)
  }

  render() {
    const { links, deviceFlags } = this.props;
    
    return deviceFlags.isDesktop ?
      <DesktopNavLinks>{this.getNavLinks(links)}</DesktopNavLinks> :
      <MobileNavLinks>{this.getNavLinks(links)}</MobileNavLinks>
  }
}

export default NavLinks;