import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'components/Tabs';
import PortfolioItem from 'components/Portfolio/PortfolioItem';

class Portfolio extends Component {
  render() {
    // const tabs = [
    //   {
    //     label: "Home",
    //     content: <PortfolioItem data={this.props.items[0]} />
    //   },
    //   {
    //     label: "work",
    //     content: 'goodbye'
    //   }
    // ];

    const { items } = this.props;

    return (
      <Tabs
        tabsData={
          items.map((tab, key) => {
            return {
              label: items[key].title,
              content: <PortfolioItem data={this.props.items[key]} />
            }
          })
        }
      />
    )
  }
}

Portfolio.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    'title': PropTypes.string,
    'demoUrl': PropTypes.string,
    'description': PropTypes.string
  }))
};

export default Portfolio;