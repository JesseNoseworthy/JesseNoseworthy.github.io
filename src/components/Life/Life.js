import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Hero from './Hero';
import Blog from './Blog';
import media from 'utils/media';

const Container = styled.div``;

const Intro = styled.div`
  margin: 0 auto;

  ${media.tablet`
    width: 55%;
  `};
`;

const Content = styled.div`
  margin: 40px 30px;
  ${media.desktop`
    margin: 75px 100px;
  `};
`;

const IntroTitle = styled.h3`text-align: center;`;

const IntroDescription = styled.p``;

class Life extends Component {
  render() {
    const { hero, intro, blogContent } = this.props;

    return (
      <Container>
        <Hero {...hero} />
        <Content>
          <Intro>
            <IntroTitle>{intro.title}</IntroTitle>
            <IntroDescription>{intro.description}</IntroDescription>
          </Intro>
          <Blog {...blogContent} />
        </Content>
      </Container>
    );
  }
}

Life.defaultProps = {};

Life.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
  intro: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
  blogContent:PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }))
};

export default Life;