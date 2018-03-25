import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'components/Image';
import media from 'utils/media';

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  ${media.desktop`flex-direction: row;`};
`;

const Content = styled.div`
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${media.desktop`
    width: 50%;
    justify-content: center;
  `};
`;

const Headshot = styled(Image)`
  height: 50%;
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
    const { title, description, headshot } = this.props;

    return (
      <Container>
        <Content>
          {title && <Title>{title}</Title>}
          {description && <Description dangerouslySetInnerHTML={{ __html: description} }/>}
        </Content>
        {headshot && <Headshot src={headshot} alt={title} />}
      </Container>
    );
  }
}

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headshot: PropTypes.string,
};

export default About;