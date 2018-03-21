import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const AccordionPanelToggleContainer = styled.div`
  cursor: ${props => props.isDisabled ? 'auto' : 'pointer'};
`;

class AccordionPanelToggle extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect() {
    if (!this.props.isDisabled && this.props.togglePanel) this.props.togglePanel();
  }

  render() {
    const { isOpen, children, className, isDisabled } = this.props;
    return (
      <AccordionPanelToggleContainer className={className} isOpen={isOpen} onClick={() => this.handleSelect()} isDisabled={isDisabled}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { isOpen })
        )}
      </AccordionPanelToggleContainer>
    );
  }
}

AccordionPanelToggle.propTypes = {
  isOpen: PropTypes.bool,
  togglePanel: PropTypes.func,
  children: PropTypes.any,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default AccordionPanelToggle;
