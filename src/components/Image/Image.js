import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  width: 100%;
`;

const Image = ({ className, src, alt }) => src && <Img src={src} alt={alt} className={className} />;

Image.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  })
};

export default Image;