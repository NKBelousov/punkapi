import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { createBrowserHistory } from 'history';

import fetchBeers from '~/epics/fetchBeers';
import init from '~/epics/init';
import createRootReducer from '~/reducers';

export const history = createBrowserHistory();

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(epicMiddleware),
    ),
  );
  const rootEpic = combineEpics(init, fetchBeers);
  epicMiddleware.run(rootEpic);
  return store;
}
