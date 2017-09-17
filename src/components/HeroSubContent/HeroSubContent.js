import PropTypes from 'prop-types';
import React from 'react';
import Link from 'components/Link';
import styled from 'styled-components';
// import media from 'utils/media';

const Container = styled.ul`
  color: ${props => props.variables.black};
  font-family: ${props => props.variables.fontFamilySecondary};
  padding-left: 0;
  list-style: none;
`;

const SubContentItem = styled.li`
  line-height: 30px;
  font-size: 14px;
  a {
    color: ${props => props.variables.secondaryColor};
    text-decoration: none;
    border-bottom: 1px solid transparent;
    transition: border-bottom ${props => props.variables.transitionTime} ease;
    &:hover {
      border-bottom: 1px solid ${props => props.variables.secondaryColor};
    }
  }
`;

const Highlight = styled.span`
  font-family: ${props => props.variables.fontFamilySecondary};
  font-weight: bold;
  border-bottom: 1px solid ${props => props.variables.black};
`;


const HeroSubContent = ({ variables }) => (
  <Container variables={variables}>
    <SubContentItem variables={variables}>
      I'm a <Highlight variables={variables}>Front-End Developer</Highlight> in Toronto, Canada
    </SubContentItem>
    <SubContentItem variables={variables}>
      I recently launched a <Link href='https://wwww.canon.ca'>Canon.ca's</Link> latest redesign.
    </SubContentItem>
    <SubContentItem variables={variables}>
      I'm currently working with <Link href='https://facebook.github.io/react/'>React.js</Link>, and <Link href='https://www.styled-components.com/'>styled-components</Link>.
    </SubContentItem>
  </Container>
);

HeroSubContent.propTypes = {
  variables: PropTypes.object
};

export default HeroSubContent;
