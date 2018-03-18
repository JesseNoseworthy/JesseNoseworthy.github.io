import React from 'react'
import Home from 'components/Home';

export const portfolio = (
  <div>
    <h2>
      What I've Built
    </h2>
  </div>
)

export const travel = (
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
    content: portfolio
  },
  {
    label: "Where I've Been",
    content: travel
  },
];