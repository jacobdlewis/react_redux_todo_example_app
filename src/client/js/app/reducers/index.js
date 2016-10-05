import { combineReducers } from 'redux';
import routerReducer from './RouterReducer';
import app from './AppReducer';

export default combineReducers({
  app,
  router: routerReducer
});
