import { ajax } from 'rxjs/ajax';
import { concat } from 'rxjs';
import { ofType } from 'redux-observable';
import { debounceTime, map, switchMap } from 'rxjs/operators';

import { BEER_SEARCH_START, beerSearchSuccess } from '~/actions/beers';

const API = 'https://api.punkapi.com/v2/beers';

export default function fetchBeers(action$) {
  return action$.pipe(
    ofType(BEER_SEARCH_START),
    debounceTime(750),
    switchMap(action => concat(
      ajax.getJSON(API + (action.payload ? `?beer_name=${action.payload}` : '')).pipe(
        map(beerSearchSuccess),
      ),
    )),
  );
}
