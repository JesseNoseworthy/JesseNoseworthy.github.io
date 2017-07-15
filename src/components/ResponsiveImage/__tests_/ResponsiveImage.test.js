import React from 'react';
import renderer from 'react-test-renderer';
import ResponsiveImage from '../index';

describe('ResponsiveImage', () => {
  describe('Snapshot tests', () => {
    it('default state (empty)', () => {
      const component = renderer.create(
        <ResponsiveImage 
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
          responsiveFlags={{
            isDesktopExtraLarge: false,
            isDesktopLarge: false,
            isDesktop: false,
            isTablet: false,
            isMobile: false
          }}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders in desktop XL', () => {
      const component = renderer.create(
        <ResponsiveImage
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
          responsiveFlags={{
            isDesktopExtraLarge: true,
            isDesktopLarge: false,
            isDesktop: false,
            isTablet: false,
            isMobile: false
          }}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders in desktop XL', () => {
      const component = renderer.create(
        <ResponsiveImage
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
          responsiveFlags={{
            isDesktopExtraLarge: true,
            isDesktopLarge: false,
            isDesktop: false,
            isTablet: false,
            isMobile: false
          }}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders in desktop large', () => {
      const component = renderer.create(
        <ResponsiveImage
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
          responsiveFlags={{
            isDesktopExtraLarge: false,
            isDesktopLarge: true,
            isDesktop: false,
            isTablet: false,
            isMobile: false
          }}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders in desktop standard', () => {
      const component = renderer.create(
        <ResponsiveImage
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
          responsiveFlags={{
            isDesktopExtraLarge: false,
            isDesktopLarge: false,
            isDesktop: true,
            isTablet: false,
            isMobile: false
          }}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders in tablet', () => {
      const component = renderer.create(
        <ResponsiveImage
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
          responsiveFlags={{
            isDesktopExtraLarge: false,
            isDesktopLarge: false,
            isDesktop: false,
            isTablet: true,
            isMobile: false
          }}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders in mobile', () => {
      const component = renderer.create(
        <ResponsiveImage
          src={'my-img.jpg'}
          alt={'this is alt text'}
          animationType={'fade'}
          responsiveFlags={{
            isDesktopExtraLarge: false,
            isDesktopLarge: false,
            isDesktop: false,
            isTablet: false,
            isMobile: true
          }}
        />
      );

      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
