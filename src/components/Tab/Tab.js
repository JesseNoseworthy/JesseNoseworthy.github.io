import React, { Component } from 'react';
// import styled from 'styled-components';

// const Container = styled.div``;

class Tab extends Component {
  render() {
    const { isActive, isDisabled, onSelect } = this.props
    return (
      <div
        className={
          isDisabled ? 'tab disabled' : isActive ? 'tab active' : 'tab'
        }
        onClick={isDisabled ? null : onSelect}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Tab;