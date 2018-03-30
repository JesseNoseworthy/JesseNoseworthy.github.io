import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import media from 'utils/media';

const Entry = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;

  &:not(:last-child) {
    border-bottom: ${props => `1px solid ${props.theme.colors.border}`};
    padding-bottom: 50px;
    margin-bottom: 50px;
  }

  ${media.tablet`
    flex-direction: row;
    margin: 0 25px;

    &:first-child {
      > div {
        padding: 0 30px;
      }

      > img {
        width: 55%;
      }
    }

    &:not(:first-child) {
      width: calc((100% / 2) - (25px * 2));
      flex-direction: column;
      border-bottom: none;
    }
  `};

  ${media.desktop`
    &:not(:first-child) {
      width: calc((100% / 3) - (25px * 2));
    }
  `};
`;

const Content = styled.div``;

const EntryTitle = styled.h4`
  margin-top: 20px;
`;

const BlogEntry = ({ title, image, description }) => (
  <Entry>
    <Image src={image} />
    <Content>
      <EntryTitle>{title}</EntryTitle>
      <p>{description}</p>
    </Content>
  </Entry>
);

BlogEntry.defaultProps = {};

BlogEntry.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
};

export default BlogEntry;