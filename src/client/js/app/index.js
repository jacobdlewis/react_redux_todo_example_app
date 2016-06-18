import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import routes from './containers/routes';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';

// Entry point for css and imported here so that webpack will process
import '../../css/app.scss';

const store = configureStore({});
const devTools = __DEV__ ? <DevTools store={ store } /> : undefined;

ReactDOM.render(
  <div>
    <Provider store={ store }>
      <Router history={ browserHistory }>
        { routes }
      </Router>
    </Provider>
    { devTools }
  </div>,
  document.getElementById('main')
);
