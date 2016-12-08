import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import routerReducer from './RouterReducer';
import app from './AppReducer';

export default combineReducers({
  app,
  router: routerReducer,
  intl: intlReducer,
});
