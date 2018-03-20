import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import Link from 'components/Link'

const Container = styled(Link)`
  width: 100%;
  margin: 10px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.175);
  text-decoration: none;

  * {
    color: rgb(51, 51, 51);
  }
  
  &:hover {
    background: rgba(0,0,0,0.025);
  }
  
  ${media.desktop`width: calc(50% - (20px * 2));`};
`;

const Title = styled.h5`
  font-size: 1.4rem;
  width: 100%;
`;

const DemoLink = styled.p`
  margin: 0;
  line-height: 1rem;
  text-decoration: none;
  background: rgb(78,108,202);
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  font-size: 11px;
`;

const Description = styled.p`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.4rem;
`;

const PortfolioItem = ({ title, description, demoUrl }) => title && demoUrl && (
  <Container href={demoUrl}>
    <Title>{title}</Title>
    {description && <Description>{description}</Description>}
    <DemoLink>Demo</DemoLink>
  </Container>
);

export default PortfolioItem;