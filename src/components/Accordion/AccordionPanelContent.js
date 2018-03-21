import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const AccordionPanelContentContainer = styled.div`
  max-height: ${props => (props.isOpen ? `${props.maxHeight}px` : 0)};
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transition: max-height 500ms, visibility 500ms;
  margin: 15px 0;
`;

class AccordionPanelContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      maxHeight: 0,
    };

    this.getSectionHeight = this.getSectionHeight.bind(this);
  }

  componentDidMount() {
    this.getSectionHeight();
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.children !== this.props.children ||
      nextProps.isOpen !== this.props.isOpen
    ) {
      this.getSectionHeight();
    }
  }

  getSectionHeight() {
    if (this.container) {
      this.setState({
        maxHeight: this.container.scrollHeight,
      });
    }
  }

  render() {
    const { isOpen, children, className } = this.props;
    return (
      <AccordionPanelContentContainer
        isOpen={isOpen}
        className={className}
        maxHeight={this.state.maxHeight}
        innerRef={el => (this.container = el)}
      >
        {children}
      </AccordionPanelContentContainer>
    );
  }
}

AccordionPanelContent.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default AccordionPanelContent;
