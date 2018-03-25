import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import Link from 'components/Link'

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: ${props => props.theme.colors.fadedBlack};
  position: absolute;
  bottom: 0;

  ${media.desktop`
    flex-direction: row;
    padding: 40px 50px;
  `};

  * {
    color: ${props => props.theme.colors.white};
    ${media.desktop`text-align: initial;`};
  }
`;

const Title = styled.h5`
  font-size: 1.8em;
  margin-bottom: 2px;

  ${media.desktop`font-size: 2.8rem;`};
`;

const DemoLink = styled(Link)`
  text-decoration: none;
  text-transform: lowercase;
  font-weight: 100;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 10px 15px;
  text-align: center;
  border-radius: 5px;
  font-size: 0.8rem;
  height: 40px;
  line-height: 20px;
  width: 150px;
  margin-bottom: 10px;

  &:not(:first-child) {
    margin-left: 10px;
    ${media.desktop`margin-left: 0;`};
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 1.2em;
  line-height: 1.4rem;
  display: none;

  ${media.desktop`display: block;`};
`;

const Skills = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
  ${media.desktop`font-size: 0.8rem;`};
`;

const DemoLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
  ${media.desktop`
    flex-direction: column;
    justify-content: space-between;
    margin: 7px 0;
  `};
`;

const Content = styled.div`padding-right: 30px;`;

const PortfolioCard = ({ title, description, demo, skills }) => (
  <Container>
    <Content>
      <Title>{title}</Title>
      {skills && <Skills>{skills}</Skills>}
      {description && <Description>{description}</Description>}
    </Content>
    <DemoLinks>
      {demo.map((demoItem, key) => 
        <DemoLink href={demoItem.url} target="_blank" key={key}>
          {demoItem.title}
        </DemoLink>
      )}
    </DemoLinks>
  </Container>
);

export default PortfolioCard;