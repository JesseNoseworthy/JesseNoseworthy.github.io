import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import Link from 'components/Link'

const Container = styled.div`
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.175);

  * {
    color: rgb(51, 51, 51);
    text-align: center;
    ${media.desktop`text-align: initial;`};
  }
  
  &:hover {
    background: rgba(0,0,0,0.025);
  }
  
  ${media.desktop`
    width: calc(50% - (20px * 2));
    align-items: flex-end;
  `};
`;

const Title = styled.h5`
  font-size: 1.2rem;
  padding-bottom: 5px;
`;

const DemoLink = styled(Link)`
  margin-left: 10px;
  line-height: 1rem;
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 100;
  background: rgb(78,108,202);
  color: white;
  padding: 10px 15px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.8rem;
`;

const Description = styled.p`
  width: 100%;
  font-size: 0.8rem;
  line-height: 1.4rem;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.175);
`;

const TitleRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  ${media.desktop`align-items: flex-start;`};
`;

const Skills = styled.span`
  color: gray;
  text-transform: uppercase;
  font-size: 10px;
`;

const DemoLinks = styled.div`
  margin-top: 4px;
  display: flex;
`;

const PortfolioItem = ({ title, description, demo, skills }) => title && demo.length && (
  <Container>
    <TitleRow>
      <Title>{title}</Title>
      {skills && <Skills>{skills}</Skills>}
    </TitleRow>
    {description && <Description>{description}</Description>}
    <DemoLinks>
      {demo.map(demoItem => <DemoLink href={demoItem.url}>{demoItem.title}</DemoLink>)}
    </DemoLinks>
  </Container>
);

export default PortfolioItem;