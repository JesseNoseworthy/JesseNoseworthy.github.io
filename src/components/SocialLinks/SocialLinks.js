import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'components/Link';

const Container = styled.div`margin-top: 15px;`;

const SocialLink = styled(Link)`
  margin-right: 15px;

  transition: ${props => `color ${props.theme.values.baseTransition}`};
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Social = ({ links }) => (
  <Container>
    {links.map((link, key) =>
      <SocialLink href={link.href} key={key} target="_blank">
        {link.title}
      </SocialLink>
    )}
  </Container>
)

Social.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string
  }))
};

export default Social;