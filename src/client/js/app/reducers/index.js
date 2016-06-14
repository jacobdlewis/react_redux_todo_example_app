import { combineReducers } from 'redux';
import app from './AppReducer';
import dashboard from './DashboardReducer';

export default combineReducers({
  app: app,
  dashboard: dashboard,
});
