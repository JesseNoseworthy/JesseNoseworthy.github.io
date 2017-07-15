import React from 'react';
import renderer from 'react-test-renderer';
import Carousel from '../index';

describe('Carousel', () => {
  describe('Snapshot tests', () => {
    it('It renders a simple div with one child', () => {
      const component = renderer.create(
        <Carousel>
          <img src='image src' alt='text' />
        </Carousel>
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
    it('It accepts additional options', () => {

      const additionalOptions = {
        infinite: true,
        adaptiveHeight: true
      }

      const component = renderer.create(
        <Carousel {...additionalOptions}>
          <img src='image src' alt='text' />
        </Carousel>
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
