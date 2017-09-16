import PropTypes from 'prop-types';
import React from 'react';
import Link from 'components/Link';
import styled from 'styled-components';
// import media from 'utils/media';

const Container = styled.ul`
  color: ${props => props.variables.black};
  font-family: ${props => props.variables.fontFamilySecondary};
`;

const SubContentItem = styled.li`
  a {
    color: blue;
    text-decoration: none;
  }
`;

const Highlight = styled.span`
  color: red;
`;


const HeroSubContent = ({ variables }) => (
  <Container variables={variables}>
    <SubContentItem>
      I'm a <Highlight>Front-End Developer</Highlight> in Toronto, Canada
    </SubContentItem>
    <SubContentItem>
      I recently launched a <Link href='https://wwww.canon.ca'>Canon.ca's</Link> latest redesign.
    </SubContentItem>
    <SubContentItem>
      I'm currently working with <Link href='https://facebook.github.io/react/'>React.js</Link>, and <Link href='https://www.styled-components.com/'>styled-components</Link>. See more of my interests <Link href='#'>Here</Link>
    </SubContentItem>
  </Container>
);

HeroSubContent.propTypes = {
  variables: PropTypes.object
};

export default HeroSubContent;
