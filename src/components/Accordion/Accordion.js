import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`width: 100%;`;

class Accordion extends Component {
  render() {
    const { children, isAllOpen } = this.props;
    return (
      <AccordionContainer>
        {React.Children.map(children, child =>
          React.cloneElement(child, { isAllOpen })
        )}
      </AccordionContainer>
    );
  }
}

Accordion.propTypes = {
  children: PropTypes.any,
  isAllOpen: PropTypes.bool,
};

export default Accordion;
