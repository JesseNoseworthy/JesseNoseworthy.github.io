import React from 'react';
import Link from '../index';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Link', () => {
  describe('Shallow rendering', () => {
    it('renders as a button element', function() {
      expect(shallow(<Link href='google.com' />).type()).toEqual('a');
    });
  });

  describe('Mounting', () => {
    it('allows us to set props', () => {
      const wrapper = mount(<Link href='' />);

      wrapper.setProps({ href: 'google.com' });
      expect(wrapper.props().href).toEqual('google.com');
    });

    it('simulates click events', () => {
      const handleClick = jasmine.createSpy();
      const wrapper = mount(<Link href='google.com' onClick={handleClick} />);
      wrapper.find('a').simulate('click');
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Snapshot tests', () => {
    it('default state (only required props)', () => {
      const component = renderer.create(
        <Link href='google.com' />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('sets children as text', function() {
      const component = renderer.create(
        <Link href='google.com'>Test</Link>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('parses and sets innerHtml', function() {
      const component = renderer.create(
        <Link href='google.com' innerHtml={'Test<sup>TM</sup>'}/>
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
