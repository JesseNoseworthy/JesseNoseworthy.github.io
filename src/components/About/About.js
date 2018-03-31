import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundImage from 'components/BackgroundImage';
import SocialLinks from 'components/SocialLinks';
import media from 'utils/media';

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

const Headshot = styled(BackgroundImage)`
  height: 40vh;
  ${media.desktop`
    height: 100%;
    width: 50%;
    border-bottom: none;
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
          <SocialLinks links={socialLinks} />
        </Content>
        {headshot &&
          <Headshot {...headshot} title={title} />
        }
      </Container>
    );
  }
}

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headshot: PropTypes.shape({
    mobileSrc: PropTypes.string,
    desktopSrc: PropTypes.string
  }),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string
  }))
};

export default About;