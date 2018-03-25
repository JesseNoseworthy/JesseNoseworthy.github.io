import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard  from 'components/Portfolio/PortfolioCard';

const Container = styled.div``;

const Asset = styled.div`
  background-image: ${props => `url(${props.backgroundImage})`};
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div``;

class PortfolioItem extends Component {
  render() {
    const { data } = this.props;

    return (
      <Container>
        <Asset backgroundImage={data.image} />
        <Content>
          <PortfolioCard {...data} />
        </Content>
      </Container>
    )
  }
}

export default PortfolioItem;