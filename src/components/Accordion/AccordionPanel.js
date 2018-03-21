import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const AccordionPanelContainer = styled.div`width: 100%;`;

class AccordionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: this.props.isOpen || this.props.isOpenOnLoad || this.props.isAllOpen };
    this.togglePanel = this.togglePanel.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isAllOpen !== undefined && nextProps.isAllOpen !== null && this.props.isAllOpen !== nextProps.isAllOpen) {
      this.setState({ isOpen: nextProps.isAllOpen });
    } else {
      if (!this.props.isOpen && nextProps.isOpen) {
        this.setState({ isOpen: nextProps.isOpen });
      }
    }
  }

  togglePanel() {
    if (this.props.onToggle) this.props.onToggle(!this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <AccordionPanelContainer className={this.props.className}>
        {React.Children.map(this.props.children, child =>
          React.cloneElement(child, {
            isOpen: this.state.isOpen,
            togglePanel: this.togglePanel,
          })
        )}
      </AccordionPanelContainer>
    );
  }
}

AccordionPanel.propTypes = {
  isOpen: PropTypes.bool,
  isOpenOnLoad: PropTypes.bool,
  isAllOpen: PropTypes.bool,
  children: PropTypes.any,
  onToggle: PropTypes.func,
}

export default AccordionPanel;
