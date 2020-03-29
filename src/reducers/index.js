import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import beers from './beers';

export default history => combineReducers({
  router: connectRouter(history),
  beers,
});
