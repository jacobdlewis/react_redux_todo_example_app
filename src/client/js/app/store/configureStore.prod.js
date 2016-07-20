import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from '../middleware/promise-middleware';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunkMiddleware)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
