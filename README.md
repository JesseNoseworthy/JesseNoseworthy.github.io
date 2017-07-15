# Canon Front-End

This application is built off of the [Create React App](https://github.com/facebookincubator/create-react-app) shell, with some custom modifications inspired by David Wells' [PostCSS-tutorial](https://github.com/DavidWells/PostCSS-tutorial) repository.

We will be using [Webpack](https://webpack.github.io/) for the configuration and [Yarn](https://yarnpkg.com/en/) as our pack manager.

### Quick Links
- [System Requirements](#system-requirements)
- [Getting Started](#getting-started)
- [Yarn Cheatsheet](#yarn-cheatsheet)
- [Walk-through of reusable styles, mixins, variables, fonts](#global-stylesheets)
- [Building Components](#building-components)


### System Requirements

- Node.js >= 6.9.x
- Yarn Package Manager

### Getting Started

1. Clone the [Canon GitHub repository](https://github.com/climax-media/canon). 

2. Ensure you have [Yarn installed](https://yarnpkg.com/en/docs/instal) first, then install all of the package dependencies for the project from your terminal:

```
yarn
```

3. Start the local development server:

```
yarn start
```

### Yarn Cheatsheet

For a quick guide on some of the differences between `yarn` and `npm`, check out [this guide](https://yarnpkg.com/lang/en/docs/migrating-from-npm/#toc-cli-commands-comparison). But in short, here's a quick reference:

| NPM                       | Yarn                  |
|---------------------------|-----------------------|
| npm install               |  yarn || yarn install |
| npm install jquery --save | yarn add jquery       |
| npm run start             | yarn start            |
| npm run build             | yarn build            |

##### A few notes:
- You can run `yarn` or `yarn install` and get the same result
- With Yarn, packages are saved to the `package.json` automatically. That's awesome, right?
- For more info on `npm` versus `yarn`, check out [this article](https://scotch.io/tutorials/yarn-package-manager-an-improvement-over-npm).

### Global Stylesheets
- [common.css](#commoncss)
- [font.css](#fontscss)
- [mixins.css](#mixinscss)
- [typography.css](#typographycss)
- [variables.css](#variablescss)

The structure of component-based styles was explaining in the [Component wiki](https://github.com/climax-media/canon/wiki/Front-End:-creating-a-component#stylecss), so head over there for an introspective look at how a base stylesheet is structured.

This guide will look into how we're approach our reusable styles, most notably the contents within the `./styles` directory.

To break it down, we will review per file:

#### common.css

This is essentially our "entry point" for our styles -- although not in a _pure_ sense. The contents of this file are imported into our applications **global entry point**, which exists within `src/app/index.js`. But in terms of our styles, this should operate as the last file we touch before we compile our code.

When using this file it's important to note that it doesn't take advantage of our `styles` object -- meaning there is no dynamic classnames. The purpose of this file is to target implement any global styles, target HTML tags, and house our imports.

#### fonts.css

This is where we declare our `@font-face`'s to be used across the application. This most notably takes places within our mixins, where global fonts are declared.

#### mixins.css

Mixins are an extremely beneficial tool that we will be using across our code to ensure we can cut down on repeated code, as well as to have more global control.

You can refer to the `./config/postcss.config.js` file to see all of the styling tools we're using, but for here we will be using [postcss-mixins](https://github.com/postcss/postcss-mixins). 

The file will contain our base font-styling, some reusable code, and some mixins for more specific instances.

Right now I can see multiple instances where we can use this to target more specific typography, where elsewhere we would create a new component for these instances. This is up for debate, though.

#### typography.css

This takes advantage of our base mixins for font styling and targets them per breakpoint. This file should act as our global reference for how we're handling our typography.

#### variables.css

Place any variables in this file and then import them into each stylesheet to be called.

For reference, the structure used here is based off of [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars).

## Building Components

- [Component Module Structure](https://github.com/climax-media/canon/wiki/Front-End:-creating-a-component#the-structure-of-a-component-module)
- [React Components](https://github.com/climax-media/canon/wiki/Front-End:-creating-a-component#indexjs)
- [Component-based Stylesheets](https://github.com/climax-media/canon/wiki/Front-End:-creating-a-component#stylecss)
- [For Widgets, how their module structure differs from components](https://github.com/climax-media/canon/wiki/Front-End:-Structure-of-a-Widget)

### The structure of a component module

Components are broken up into their own separate modules and should contain, at minimum, their own stylesheet and React.JS module. Here is an example of a directory for a component:

```
./Image
  ./Image/index.js
  ./Image/Image.css
```


#### index.js
Since we will be working off of a [PostCSS](https://github.com/DavidWells/PostCSS-tutorial) style configuration, we will need to _import_ our stylesheets into our React component from the stylesheet:

```
import React from 'react';
import styles from './Image.css';

...
```

Most components we build will be only require simple JSX, meaning we can build them in a very lightweight structure:

```
const RandomReactComponent = ({
  props
}) => (
  JSX
);
```

Here is an example of an actual component following this structure:

```
import React from 'react';
import styles from './Image.css';

const Image = ({
  src,
  alt,
  ...others
}) => (
  <img
    className={styles.Image}
    src={src}
    alt={alt}
    {...others}
  />
);

export default Image;
```

In reference to the className, this is expanded on below.

If a component requires additional functionality we will need to declare it as a [Class Component](https://facebook.github.io/react/docs/components-and-props.html#functional-and-class-components). The benefit of this is that we will be able to add additional functionality to the component. 

To do so, import `Component` from React in your initial import:

```
import React, { Component } from 'react';
```

From there, your component can be structured as such:

```
class RandomComponent extends Component {
  // functionality
  render() {
    return (
      // JSX
    )
  }
};
```

This is where we can take advantage of the [Component Lifecycle](https://facebook.github.io/react/docs/react-component.html).

After you've built your component you can either import into another component or a widget.

#### Giving our components a className

We will be taking [Jed Watson's Classnames libary](https://github.com/JedWatson/classnames), which will enable us to add conditional classnames, as well as to make it easier to assign classnames. 

When assigning the components class, we will need to link it to our `styles` configuration. To do so, simple assign it by prefixing `styles` before the class. Then when we hook up the stylesheets, our local styles will connect to our className.

#### style.css

For information on how we're handling global styles, variables, mixins, and more head over to [this Wiki](https://github.com/climax-media/canon/wiki/Front-End:-global-styles,-mixins,-variables,-fonts).

When setting up our stylesheets, we need to remember to import our variables so they can be used across the sheet. To do so, simply import the variables CSS module at the top of the stylesheet:

```
@import '../../styles/variables.css';
```

Our goal for styles is to keep them bundled with each component using a `local` styling structure. As we saw above with assigning a className with the `styles` prefix, we need to connect our local styles to our React components. You can also check out a [Post-CSS](https://github.com/DavidWells/PostCSS-tutorial) structure that is similar to our infrastructure.

Assuming the `index.js` has been formatted correctly (please see above), this is how we can connect our classNames:

```
:local(.Image) {
  border: 5px solid $red;
}

:global(.Image) {
  border: 5px solid $red;
}
```

This will compile to:

```
.Image__Image___1yRlz {
    border: 5px solid #DB0812;
}

.Image {
  border: 5px solid #DB0812;
}
```

So the className of `styles.Image` will compile to `Image__Image___1yRlz`, while using `:global(.Image)` will not scramble our classNames. This is expanded on in the [react-css-modules](https://github.com/gajus/react-css-modules#global-css) repository, but there should only be **very specific** usecases of `:global()` styling, as the whole purpose of the application is to modularize our styles.

**Back to :local() styles:**

This can be applied for multiple instances of classNames for each component, but these are **bundled** with each component; meaning that our classNames are only targeted directly within our modules.

Keeping this in mind, though, we can assign our classNames as `props` and style them in the location where we import our components. This can be very beneficial for specific variances of our components.