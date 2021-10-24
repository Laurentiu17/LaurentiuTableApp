import 'react-app-polyfill/ie11'; // keep this only if IE11 support requested
import 'react-app-polyfill/stable'; // keep this only if very old browser support requested
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { OidcProvider } from 'redux-oidc';
import { CookiesProvider } from 'react-cookie';
import { LocationProvider } from '@reach/router';

import userManager from '@services/user-manager';

// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import i18n (needs to be bundled ;))
import './i18n';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <OidcProvider store={store} userManager={userManager}>
      <CookiesProvider>
        <LocationProvider>
          <App />
        </LocationProvider>
      </CookiesProvider>
    </OidcProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
