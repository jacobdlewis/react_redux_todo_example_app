import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Match } from 'react-router';
import ConnectedRouter from './ConnectedRouter';
import FontFaceObserver from 'fontfaceobserver';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';
import acss from './utils/acss';
import Wrapper from './containers/Wrapper';


const store = configureStore();

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
