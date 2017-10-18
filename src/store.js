import reducers from './reducers/index';
import enhancers from './enhancers/index';
import middlewares from './middleware/index';
import { createStore, applyMiddleware, compose } from 'redux';

let store;
const makeStoreInstance = (initState) => {
  if (!store) {
    let createStoreWithMiddleware = compose(applyMiddleware(...middlewares), enhancers)(createStore);
    store = createStoreWithMiddleware(reducers, initState);
  }
  return store;
}

export function resetStore(initState) {
  store = undefined;
  store = makeStoreInstance(initState);
}

export default makeStoreInstance;
