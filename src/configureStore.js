import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import fetchBeers from '~/epics/fetchBeers';
import init from '~/epics/init';
import rootReducer from '~/reducers';


export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware),
    ),
  );
  const rootEpic = combineEpics(init, fetchBeers);
  epicMiddleware.run(rootEpic);
  return store;
}
