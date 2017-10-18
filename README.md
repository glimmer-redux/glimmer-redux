# Glimmer Redux

Predictable state management for glimmer apps

## Installation

```
yarn add glimmer-redux
yarn add rollup-plugin-glimmer-redux
```

Open the ember-cli-build.js file and import the rollup plugin

```js
const glimmerRedux = require('rollup-plugin-glimmer-redux');
```

Then, add the plugin to the list of rollup plugins

```js
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

```js
//src/reducers/index.js
import { combineReducers } from 'redux';

const number = (state, action) => {
  // ...reducer code
};

export default combineReducers({
  number
});
```


## Example

https://github.com/glimmer-redux/glimmer-redux-example


## Usage

```js
import { connect } from 'glimmer-redux';

const stateToComputed = state => ({
  up: state.number.up
});

const dispatchToActions = dispatch => ({
  update: () => dispatch({type: 'ADD'})
});

export default connect(stateToComputed, dispatchToActions)();
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
