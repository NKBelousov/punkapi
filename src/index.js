import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';

import configureStore, { history } from './configureStore';
import BeerListContainer from '~/containers/BeerListContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={BeerListContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
