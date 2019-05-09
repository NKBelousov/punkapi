export const BEER_SEARCH_START = '@@beers/SEARCH_START';
export const BEER_SEARCH_SUCCESS = '@@beers/SEARCH_SUCCESS';
export const BEER_SEARCH_FAILURE = '@@beers/SEARCH_FAILURE';

export const beerSearchStart = payload => ({
  type: BEER_SEARCH_START,
  payload,
});

export const beerSearchSuccess = payload => ({
  type: BEER_SEARCH_SUCCESS,
  payload,
});

export const beerSearchFailure = payload => ({
  type: BEER_SEARCH_FAILURE,
  payload,
});
