import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'components/Image';
import Social from './Social';
import media from 'utils/media';
import desktopImage from 'assets/images/nepal-tall.jpg';
import mobileImage from 'assets/images/nepal-wide.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100vw;

  ${media.desktop`
    flex-direction: row;
    height: 100vh;
  `};
`;

const Content = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  ${media.desktop`
    width: 50%;
    justify-content: center;
  `};
`;

const Headshot = styled.div`
  background-image: ${props => `url(${mobileImage})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 40vh;
  ${media.desktop`
    height: 100%;
    width: 50%;
    border-bottom: none;
    background-image: ${props => `url(${desktopImage})`};
  `};
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};

  ${media.mobile`font-size: 2.6rem;`};
`;

const Description = styled.p``;

class About extends Component {
  render() {
    const { title, description, headshot, socialLinks } = this.props;

    return (
      <Container>
        <Content>
          {title && <Title>{title}</Title>}
          {description && <Description dangerouslySetInnerHTML={{ __html: description} }/>}
          <Social links={socialLinks} />
        </Content>
        {headshot &&
          <Headshot src={desktopImage} title={title} />
        }
      </Container>
    );
  }
}

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headshot: PropTypes.string,
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string
  }))
};

export default About;