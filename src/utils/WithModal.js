import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  border: none;
  height: 42px;
  width: 42px;
  background: ${props => props.theme.colors.white};
  z-index: ${props => props.theme.values.modalZIndex};
  border-radius: 50%;
  font-size: 25px;
  cursor: pointer;
`;

const ModalContent = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0,0,0,0.95);
  padding: 50px;
`;

class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: this.props.isOpenOnLoad
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        isOpen: false
      })
    }
  }

  render() {
    const { children, modalComponent: ModalComponent } = this.props;
    const { isOpen } = this.state;

    return (
      <Container isOpen={isOpen}>
        {React.Children.map(children, child => 
          React.cloneElement(child, { ...this.state, openModal: this.toggleModal }))}
        {isOpen && 
          <Fragment>
            <CloseButton onClick={() => this.toggleModal()}>&#x2715;</CloseButton>
            <ModalContent>
              <ModalComponent />
            </ModalContent>
          </Fragment>
        }
      </Container>
    );
  }
}

Modal.propTypes = {
  isOpenOnLoad: PropTypes.bool,
  modalComponent: PropTypes.func,
};

Modal.defaultProps = {
  isOpenOnLoad: false,
};

export default withRouter(Modal);