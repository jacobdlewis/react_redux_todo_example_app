import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from '../containers/App';
import Dashboard from '../containers/Dashboard';
import AboutPage from '../containers/AboutPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="about" component={AboutPage} />
  </Route>
);
