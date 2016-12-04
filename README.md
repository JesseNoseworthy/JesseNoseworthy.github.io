** IN PRODUCTION **

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

### Notes on importing css styles
* styles having /src/ in their absolute path are considered part of the application and exported as local css modules.
* other styles are considered global styles used by many components and are included in the css bundle directly.

### Credits 

Starter kit can be found [here](https://github.com/alicoding/react-webpack-babel).