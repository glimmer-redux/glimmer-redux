import reducers from './reducers/index';
import enhancers from './enhancers/index';
import middlewares from './middleware/index';
import { createStore, applyMiddleware, compose } from 'redux';

// Handle "classic" middleware exports (i.e. an array), as well as the hash option
const extractMiddlewareConfig = (mc) => {
  return mc.constructor === Array ? { middleware: mc } : mc;
}

let store;
const makeStoreInstance = (initState) => {
  if (!store) {
    let { middleware, setup = () => {} } = extractMiddlewareConfig(middlewares);
    let createStoreWithMiddleware = compose(applyMiddleware(...middleware), enhancers)(createStore);
    store = createStoreWithMiddleware(reducers, initState);
    setup(store);
  }
  return store;
}

export function resetStore(initState) {
  store = undefined;
  store = makeStoreInstance(initState);
}

export default makeStoreInstance;
