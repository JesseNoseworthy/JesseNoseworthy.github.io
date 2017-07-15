import React from 'react';
import renderer from 'react-test-renderer';
import Svg from '../index';

describe('Svg', () => {
  describe('Snapshot tests', () => {
    it('default state (empty)', () => {
      const component = renderer.create(
        <Svg src={'/icon.svg'} />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('populated attributes', () => {
      const component = renderer.create(
        <Svg
          src={'/icon.svg'}
          className={'my-class'}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
