# React Portfolio :rocket:

Welcome! This application is built using React, Router, and Styled-Components.

- [System requirements](https://github.com/JesseNoseworthy/react_portfolio#system-requirements)
- [Getting started](https://github.com/JesseNoseworthy/react_portfolio#getting-started)
- [Yarn cheatsheet](https://github.com/JesseNoseworthy/react_portfolio#yarn-cheatsheet)
- [styled-components](https://github.com/JesseNoseworthy/react_portfolio#styled-components)

### System Requirements

- Node.js >= 6.9.x
- Yarn Package Manager

### Getting Started

1. Clone this [GitHub repository](https://github.com/JesseNoseworthy/react_portfolio). 

2. Ensure you have [Yarn installed](https://yarnpkg.com/en/docs/instal) first, then install all of the package dependencies for the project from your terminal:

```
yarn
```

3. Start the local development server:

```
yarn start
```

### Yarn Cheatsheet

For a quick guide on some of the differences between `yarn` and `npm`, check out [this guide](https://yarnpkg.com/lang/en/docs/migrating-from-npm/#toc-cli-commands-comparison). But in short, here's a quick reference:

| NPM                       | Yarn                  |
|---------------------------|-----------------------|
| npm install               |  yarn || yarn install |
| npm install jquery --save | yarn add jquery       |
| npm run start             | yarn start            |
| npm run build             | yarn build            |

##### A few notes:
- You can run `yarn` or `yarn install` and get the same result
- With Yarn, packages are saved to the `package.json` automatically. That's awesome, right?
- For more info on `npm` versus `yarn`, check out [this article](https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm).

### Styled-Components

This application makes use of [Styled-Components](https://github.com/styled-components/styled-components). 

We declare global styles for the application [here](https://github.com/JesseNoseworthy/react_portfolio/blob/master/src/app/globalStyles.js).

It will be very common to see syntax such as:

```
<Container>
  <Title>This is a title</Title>
</Container>
``` 

These components are _Styled Components_. Here is an example of how we would declare them:

```
import styled from 'styled-components';

const Container = styled.button`
  display: flex;
`;

const Title = styled.button``;

```

This will also enable for us to make use of prop-based styling, or to better access the applications theme:

```
const Container = styled.button`
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.white};
`;

```

Here are our media queries:

```
const Container = styled.button`
  ${media.desktop`
     color: blue;
  `};
`;

```

You can learn more about _styled-components_ within their [official documentation](https://www.styled-components.com).
