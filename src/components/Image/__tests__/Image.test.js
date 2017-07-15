import React from 'react';
import renderer from 'react-test-renderer';
import Image from '../index';

describe('Image', () => {
  describe('Snapshot tests', () => {
    it('default state (empty)', () => {
      const component = renderer.create(
        <Image
          src={'my-img.jpg'}
          alt={'this is alt text'}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('populated state', () => {
      const component = renderer.create(
        <Image
          className={'my-icon'}
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
