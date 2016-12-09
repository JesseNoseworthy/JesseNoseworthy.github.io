### Heads up: This project is currently in *development*
-
# React Portfolio
A portfolio built using React, compiled by Webpack.

### To run

* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed in your system.

* Install the dependencies:

```
npm install
```

* Run development server:

```
npm start
```

Your browser should automatically open to `http://localhost:3000/`

### To build for production

```
npm run build

```

### Structure of a component 

The majority of core-development should be completed from with `../src/components`. If there is a sequence of code that may be used in more than one location, it would probably be best served as being its own component. 

Components are stored in a folder, where there will be an `index.js` and `[component-name].css` file. The `Link` component is a pretty bare-bones example of the required structure:

`index.js`

```
import React, { Component, PropTypes } from 'react';
import styles from './Link.css';

class Link extends Component {
  render() {
    const { 
      href,
      children,
      variant,
      ...others
    } = this.props;

    return (
      <a className={variant} href={href} {...others}>
        {children}
      </a>
    );
  }
}

Link.propTypes = {
  href: React.PropTypes.string,
  children: React.PropTypes.any,
  variant: React.PropTypes.string,
};

export default Link;
```

And from within `./Link.css` we can write any custom styling.

### Eslint
There is a .eslint.yaml config for eslint ready with React plugin.
To use it, you need to install additional dependencies though:

```
npm install --save-dev eslint eslint-plugin-react
```

To do the actual linting, run:

```
npm run lint
```

### Credits 

Starter kit can be found [here](https://github.com/alicoding/react-webpack-babel).