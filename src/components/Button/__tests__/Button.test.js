import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import Button from '../index';

describe('Button', () => {
  describe('Snapshot tests', () => {
    it('Basic render', () => {
      const component = renderer.create(
        <Button />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    describe('Shallow rendering (no children)...', () => {
      it('produces a `button` element type', function() {
        expect(shallow(<Button />).type()).toEqual('button');
      });
    });

    describe('Mounting to the virtual DOM...', () => {
      it('allows us to set props', () => {
        const wrapper = mount(<Button type="submit" />);
        expect(wrapper.props().type).toEqual('submit');
        wrapper.setProps({ type: 'submit' });
        expect(wrapper.props().type).toEqual('submit');
      });

      it('responds to click events', () => {
        const handleClick = jasmine.createSpy();
        const wrapper = mount(<Button onClick={handleClick} />);
        wrapper.find('button').simulate('click');
        expect(handleClick).toHaveBeenCalled();
      });
    });

    it('should keep arbitrary attributes not designated as component props', () => {
      const button = render(<Button aria-label="test" />).find('button');

      const actual = button.attr('aria-label');
      const expected = 'test';

      expect(actual).toEqual(expected);
    });
 it('populated state', () => {
      const component = renderer.create(
        <Button 
          className={'sample-button'}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
