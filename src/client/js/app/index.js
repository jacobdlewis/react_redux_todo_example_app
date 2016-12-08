import React from 'react';
import ReactDOM from 'react-dom';
import { Match } from 'react-router';
import { Provider } from 'react-intl-redux';
import { addLocaleData } from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import enLocaleData from 'react-intl/locale-data/en';
import { loadLocale } from './actions/IntlActions';
import ConnectedRouter from './containers/ConnectedRouter';
import FontFaceObserver from 'fontfaceobserver';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import acss from './utils/acss';
import Wrapper from './containers/Wrapper';

// Load 'en' by default
addLocaleData([
  ...esLocaleData,
  ...enLocaleData,
]);

const messages = require('./actions/lang/en.json');

const initialState = {
  intl: {
    locale: 'en',
    messages
  }
};

const store = configureStore(initialState);
store.dispatch(loadLocale('en'));

// Dev Tools
const devTools = __DEV__ ? <DevTools store={store} /> : undefined;

// Take care of font-loading
(sessionStorage.getItem('foutFontsLoaded') ? Promise.resolve() : new FontFaceObserver('Source Sans Pro').load()).then(() => {
  document.documentElement.className += ` ${acss('Font-SourceSansPro')}`;
  sessionStorage.setItem('foutFontsLoaded', 'y');
});

ReactDOM.render(
  <div className={acss('H(100%)')}>
    <Provider store={store}>
      <ConnectedRouter>
        <Match pattern="/" component={Wrapper} />
      </ConnectedRouter>
    </Provider>
    {devTools}
  </div>,
  document.getElementById('wrapper')
);
