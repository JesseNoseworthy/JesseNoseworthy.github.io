import React from 'react';
import renderer from 'react-test-renderer';
import Accordion from '../Accordion';

describe('Snapshot tests', () => {
  it('default state', () => {
    const component = renderer.create(<Accordion />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
