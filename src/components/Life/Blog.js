import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import BlogEntry from './BlogEntry';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 40px;
  border-top: ${props => `1px solid ${props.theme.colors.border}`};

  ${media.desktop`
    margin-top: 100px;
    padding-top: 100px;
  `};
`;

class Blog extends Component {
  render() {
    const { entries } = this.props;

    return (
      <Container>
        {entries.map((entry, key) => <BlogEntry key={key} {...entry} /> )}
      </Container>
    );
  }
}

Blog.defaultProps = {
  entries: []
};

Blog.propTypes = {
  entries:PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }))
};

export default Blog;