import { injectGlobal } from 'styled-components';

injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 13px;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    letter-spacing: 1.2px;
  }

  body {
    background: rgb(250, 250, 250);
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-family: 'Fira Sans', sans-serif;
    color: rgb(51, 51, 51);
  }

  figure {
    margin: 0;
  }

  p,
  li,
  a {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 2rem;
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.4rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.8rem;
  }

  h6 {
    font-size: 1.4rem;
  }

  h1,
  h2,
  h3,
  h4 {
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 800; 
  }

  @font-face {
    font-family: 'Material Icons';
    font-style: normal;
    font-weight: 400;
    src: url('../../media/MaterialIcons-Regular.eot'); /* For IE6-8 */
    src:
      url('../../media/MaterialIcons-Regular.woff2') format('woff2'),
      url('../../media/MaterialIcons-Regular.woff') format('woff'),
      url('../../media/MaterialIcons-Regular.ttf') format('truetype');
  }
`;