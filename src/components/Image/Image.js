import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import media from 'utils/media';

const Img = styled.img`
  width: 100%;
  ${props => props.isRound && css`
    ${media.tablet`
      border-radius: 50%;
    `};
  `}
`;

const Image = props => <Img src={props.image.src} alt={props.image.alt} isRound={props.isRound} />;

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
};

export default Image;