import React from 'react';
import { Provider } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import DevTools from './DevTools';

export default React.createClass({
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div className="fill-height">
          <Router history={browserHistory}>
            <Route path="/" component={Dashboard} />
          </Router>
          <DevTools />
        </div>
      </Provider>
    );
  }
});
