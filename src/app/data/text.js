import React from 'react'
import Home from 'components/Home';
import Portfolio from 'components/Portfolio';

export const blog = (
  <div>
    <h2>
      Where I've Been
    </h2>
  </div>
)

export const data = [
  {
    label: 'Home',
    content: Home
  },
  {
    label: "What I've Built",
    content: Portfolio
  },
  {
    label: "What I've Written",
    content: blog
  },
];