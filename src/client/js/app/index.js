import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import App from './containers/App';

// Entry point for css and imported here so that webpack will process
import s from '../../css/app.css';

const store = configureStore();

ReactDOM.render(<App store={store} history={history} />, document.getElementById('main'));
