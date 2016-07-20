/* eslint global-require: "off" */
import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from '../middleware/promise-middleware';
import thunkMiddleware from 'redux-thunk';
import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import { Iterable } from 'immutable';

const logger = createLogger({
  stateTransformer: (state) => {
    var newState = {};
    for (var i of Object.keys(state)) {
      if (Iterable.isIterable(state[i])) {
        newState[i] = state[i].toJS();
      } else {
        newState[i] = state[i];
      }
    };
    return newState;
  }
});

const createStoreWithMiddleware = compose(
  applyMiddleware(promiseMiddleware, thunkMiddleware, logger),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
