import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import { reducer as formReducer } from 'redux-form';
import routerReducer from './RouterReducer';
import app from './AppReducer';

export default combineReducers({
  app,
  router: routerReducer,
  intl: intlReducer,
  form: formReducer,
});
