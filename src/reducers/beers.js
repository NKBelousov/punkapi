import { BEER_SEARCH_FAILURE, BEER_SEARCH_START, BEER_SEARCH_SUCCESS } from '~/actions/beers';

const initialState = {
  status: 'idle',
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case BEER_SEARCH_START:
      return {
        ...state,
        status: 'loading',
      };
    case BEER_SEARCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        status: 'finished',
      };
    case BEER_SEARCH_FAILURE:
      return {
        ...state,
        status: 'failed',
      };
    default:
      return state;
  }
}
