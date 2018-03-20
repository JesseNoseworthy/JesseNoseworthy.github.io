import React from 'react'
import Home from 'components/Home';
import Portfolio from 'components/Portfolio';
import homeData from './home.json';
import portfolioData from './portfolio.json';

export const blog = (
  <div>
    <h2>
      What I've Written
    </h2>
  </div>
)

export const tabs = [
  {
    label: 'Home',
    content: <Home {...homeData} />
  },
  {
    label: "What I've Built",
    content: <Portfolio {...portfolioData} />
  },
  {
    label: "What I've Written",
    content: blog
  },
];