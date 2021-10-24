import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadUser } from 'redux-oidc';

import userManager from '@services/user-manager';

import rootSaga from '../sagas';
import reducers from '../reducers';

const saga = createSagaMiddleware();
const middleware = [promise, thunk, saga];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

loadUser(store, userManager);

saga.run(rootSaga);

export default store;
