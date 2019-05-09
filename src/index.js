import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './configureStore';
import BeerListContainer from '~/containers/BeerListContainer';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BeerListContainer />
  </Provider>,
  document.getElementById('root'),
);
