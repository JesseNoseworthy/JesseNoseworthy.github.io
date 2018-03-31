import React, { Component } from 'react';
import styled from 'styled-components';
import PortfolioCard  from 'components/Portfolio/PortfolioCard';
import BackgroundImage from 'components/BackgroundImage';
import media from 'utils/media';

const Container = styled.div`position: relative;`;

const Asset = styled(BackgroundImage)`
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
        <Asset src={data.image} />
        <Content>
          <PortfolioCard {...data} />
        </Content>
      </Container>
    )
  }
}

export default PortfolioItem;