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

const About = styled.div`
  padding: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  ${media.desktop`
    width: 50%;
    justify-content: center;
    border-right: 5px solid rgb(250, 250, 250);
  `};
`;

const Headshot = styled(Image)`
  height: 50%;
  border-bottom: 10px solid rgb(250, 250, 250);
  ${media.desktop`
    height: 100%;
    width: 50%;
    border-left: 5px solid rgb(250, 250, 250);
    border-bottom: none;
  `};
`;

const Title = styled.h1`
  color: rgb(78,108,202);

  ${media.mobile`font-size: 2.6rem;`};
`;

const Description = styled.p``;

class Home extends Component {
  render() {
    const { title, description, headshot } = this.props;

    return (
      <Container>
        <About>
          {title && <Title>{title}</Title>}
          {description && <Description dangerouslySetInnerHTML={{ __html: description} }/>}
        </About>
        {headshot && <Headshot src={headshot} alt={title} />}
      </Container>
    );
  }
}

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  headshot: PropTypes.string,
};

export default Home;