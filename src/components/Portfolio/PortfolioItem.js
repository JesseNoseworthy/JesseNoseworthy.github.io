import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import Link from 'components/Link'

const Container = styled.div`
  width: calc(50% - (20px * 2));
  margin: 10px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.175);
`;

const Title = styled.h3`width: 100%;`;

const DemoLink = styled(Link)`
  text-decoration: none;
  width: 55px;
  background: rgb(78,108,202);
  color: white;
  padding: 5px;
  text-align: center;
  border-radius: 5px;
`;

const PortfolioItem = ({ title, description, demoUrl }) => title && demoUrl && (
  <Container>
    <Title>{title}</Title>
    {description && <p>{description}</p>}
    <DemoLink href={demoUrl}>Demo</DemoLink>
  </Container>
);

export default PortfolioItem;