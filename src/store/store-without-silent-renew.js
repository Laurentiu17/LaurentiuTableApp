import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createOidcMiddleware from 'redux-oidc';

import rootSaga from '../sagas';
import reducers from '../reducers';
import userManager from '../services/user-manager';

const saga = createSagaMiddleware();
// create the middleware with the userManager
const oidc = createOidcMiddleware(userManager);

const middleware = [oidc, logger, promise, thunk, saga];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

saga.run(rootSaga);

export default store;
