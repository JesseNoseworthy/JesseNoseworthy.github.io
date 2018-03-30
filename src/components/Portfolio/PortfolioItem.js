import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard  from 'components/Portfolio/PortfolioCard';
import media from 'utils/media';

const Container = styled.div`position: relative;`;

const Asset = styled.div`
  background-image: ${props => `url(${props.backgroundImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: ${props => `calc(100vh - ${props.theme.values.navBarHeight})`};
  width: 100vw;

  ${media.desktop`height: 100vh;`};
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