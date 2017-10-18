# Glimmer Redux

[![Travis][build-badge]][build] [![Code Climate][climate-badge]][climate] [![npm package][npm-badge]][npm]

## Description

Predictable state management for glimmer apps

## Installation

```
yarn add glimmer-redux
yarn add rollup-plugin-glimmer-redux
```

Open the ember-cli-build.js file and add the rollup plugin

```
let app = new GlimmerApp(defaults, {
  rollup: {
    plugins: [
      glimmerRedux()
    ]
  }
});
```

Open the config/environment.js file and register the [reducer type]

Add a reducer directory with an index.js file

```
//src/reducers/index.js
import { combineReducers } from 'redux';

const number = (state, action) => {
  if(action.type === 'ADD') {
    let added = state.up + 1;
    return Object.assign({}, state, {up: added});
  }
  return state || {up: 1};
};

export default combineReducers({
  number
});
```


## Example

https://github.com/glimmer-redux/glimmer-redux-example


## Usage

```js
```
## How do I enable time travel debugging?

1. Install the [redux dev tools extension].

2. Enjoy!

## Running Tests

    yarn
    ember test

## License

Copyright © 2017 Toran Billups http://toranbillups.com

Licensed under the MIT License

[build-badge]: https://travis-ci.org/glimmer-redux/glimmer-redux.svg?branch=master
[build]: https://travis-ci.org/glimmer-redux/glimmer-redux

[npm-badge]: https://img.shields.io/npm/v/glimmer-redux.svg?style=flat-square
[npm]: https://www.npmjs.org/package/glimmer-redux

[climate-badge]: https://codeclimate.com/github/glimmer-redux/glimmer-redux/badges/gpa.svg
[climate]: https://codeclimate.com/github/glimmer-redux/glimmer-redux

[redux]: https://github.com/reactjs/redux
[redux dev tools extension]: https://github.com/zalmoxisus/redux-devtools-extension

[reducer type]: https://github.com/glimmer-redux/glimmer-redux-example/blob/master/config/environment.js
