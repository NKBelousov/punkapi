import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';

import { beerSearchStart } from '~/actions/beers';
import fetchBeers from '~/epics/fetchBeers';
import rootReducer from '~/reducers';

const initialEpic = () => of(beerSearchStart('')).pipe(delay(1000));

export default function configureStore() {
  const epicMiddleware = createEpicMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(epicMiddleware),
    ),
  );
  const rootEpic = combineEpics(initialEpic, fetchBeers);
  epicMiddleware.run(rootEpic);
  return store;
}
