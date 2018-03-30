import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'components/Link';
import media from 'utils/media';

const Entry = styled(Link)`
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
      width: 100%;

      > div {
        padding: 0 30px;
      }

      > figure {
        width: 55%;
        height: 325px;
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

const Content = styled.div`
  height: calc(100% - 220px);
`;

const MockLink = styled.span``;

const EntryTitle = styled.h4`
  margin-top: 20px;
`;

const Image = styled.figure`
  background-image: ${props => `url(${props.src})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0;
  margin: 0;
  height: 220px;
`;

const BlogEntry = ({ title, image, description, linkText, ...others }) => (
  <Entry {...others} target='_blank'>
    <Image src={image} />
    <Content>
      <EntryTitle>{title}</EntryTitle>
      <p>{description}</p>
      {linkText && <MockLink>{linkText}</MockLink>}
    </Content>
  </Entry>
);

BlogEntry.defaultProps = {};

BlogEntry.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  linkText: PropTypes.string,
};

export default BlogEntry;