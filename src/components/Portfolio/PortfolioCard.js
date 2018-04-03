import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import StyledLink from 'components/StyledLink'

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
    height: 250px;
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

const DemoLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 15px;
  height: 70%;
  ${media.desktop`
    flex-direction: column;
    justify-content: space-between;
    margin: auto;
  `};
`;

const DemoLink = styled(StyledLink)`
  margin-bottom: 10px;
  text-align: center;
  
  &:not(:first-child) {
    margin-left: 10px;
    ${media.desktop`margin-left: 0;`};
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 1.3em;
  line-height: 2rem;
  display: none;

  ${media.desktop`display: block;`};
`;

const Skills = styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
  ${media.desktop`font-size: 0.8rem;`};
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
        <DemoLink href={demoItem.href} target="_blank" key={key}>
          {demoItem.title}
        </DemoLink>
      )}
    </DemoLinks>
  </Container>
);

export default PortfolioCard;