import { connect } from 'react-redux';
import React, { memo } from 'react';

import { beerSearchStart } from '~/actions/beers';
import BeerList from '~/components/BeerList';

const BeerListContainer = memo(props => <BeerList {...props} />);

BeerListContainer.displayName = 'BeerListContainer';

function mapStateToProps(state) {
  return {
    items: state.beers.data,
    isLoading: state.beers.status === 'loading',
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeSearch: event => dispatch(beerSearchStart(event.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerListContainer);
