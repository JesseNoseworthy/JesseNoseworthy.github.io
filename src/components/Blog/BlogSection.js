import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import BlogEntry from './BlogEntry';
import StyledButton from 'components/StyledButton';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EntryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  padding-top: 40px;

  ${media.desktop`
    margin-top: 100px;
    padding-top: 100px;
    border-top: ${props => `1px solid ${props.theme.colors.border}`};
  `};
`;

const LoadMore = styled(StyledButton)`margin-top: 20px;`;

class BlogSection extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      currentEntriesInteger: 0,
      splitChunk: 4
    }
  }

  splitUpProducts() {
    const { splitChunk, currentEntriesInteger } = this.state;

    this.setState({
      currentEntriesInteger: currentEntriesInteger + splitChunk,
    })
  }

  componentDidMount() {
    this.splitUpProducts();
  }

  render() {
    const { entries, buttonText } = this.props;
    const { currentEntriesInteger } = this.state;

    return (
      <Container>
        <EntryContainer>
          {entries.slice(0, currentEntriesInteger).map((entry, key) => <BlogEntry key={key} {...entry} /> )}
        </EntryContainer>
        {currentEntriesInteger < entries.length &&
          <LoadMore onClick={() => this.splitUpProducts()}>{buttonText}</LoadMore>}
      </Container>
    );
  }
}

BlogSection.defaultProps = {
  entries: [],
  buttonText: "Load More",
};

BlogSection.propTypes = {
  buttonText: PropTypes.string,
  entries:PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }))
};

export default BlogSection;