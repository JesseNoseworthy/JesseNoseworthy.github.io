import React from 'react';
import Body from 'components/Body';
import variables from 'utils/variables';
import Hero from 'components/Hero';

const App = ({ data }) => (
  <Body variables={variables}>
    <Hero variables={variables} {...data} />
  </Body>
)


export default App;