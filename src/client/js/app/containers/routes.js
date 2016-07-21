import React from 'react';
import { IndexRoute, Route } from 'react-router';
import Home from '../containers/Home';
import Dashboard from '../containers/Dashboard';
import AboutPage from '../containers/AboutPage';

export default (
  <Route path="/" component={Home}>
    <IndexRoute component={Dashboard} />
    <Route path="about" component={AboutPage} />
  </Route>
);
