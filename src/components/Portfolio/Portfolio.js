import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'components/Tabs';
import PortfolioItem from 'components/Portfolio/PortfolioItem';


class Portfolio extends Component {
  getTabData() {
    return this.props.items.map((tab, key) => {
      return {
        label: this.props.items[key].title,
        content: <PortfolioItem data={tab} />
      }
    });
  }

  render() {
    const { items, deviceFlags } = this.props;

    if (deviceFlags && deviceFlags.isDesktop) {
      return (
        <Tabs
          tabsData={this.getTabData()}
        />
      )
    } else {
      return items.map((item, key) => <PortfolioItem data={item} key={key} />)
    }
  }
}

Portfolio.defaultProps = {
  deviceFlags: {
    isMobile: true,
    isTablet: false,
    isDesktop: false,
  }
}

Portfolio.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    'title': PropTypes.string,
    'demoUrl': PropTypes.string,
    'description': PropTypes.string
  })),
  deviceFlags: PropTypes.shape({
    'isMobile': PropTypes.bool,
    'isTablet': PropTypes.bool,
    'isDesktop': PropTypes.bool
  })
};

export default Portfolio;