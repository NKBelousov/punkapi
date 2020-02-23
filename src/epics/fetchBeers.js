import { ajax } from 'rxjs/ajax';
import { ofType } from 'redux-observable';
import {
  catchError, debounceTime, map, switchMap,
} from 'rxjs/operators';
import { of } from 'rxjs';

import { BEER_SEARCH_START, beerSearchFailure, beerSearchSuccess } from '~/actions/beers';

const API = 'https://api.punkapi.com/v2/beers?per_page=80';

export default function fetchBeers(action$) {
  return action$.pipe(
    ofType(BEER_SEARCH_START),
    debounceTime(750),
    switchMap(action => ajax.getJSON(API + (action.payload ? `&beer_name=${action.payload}` : '')).pipe(
      map(beerSearchSuccess),
      catchError(() => of(beerSearchFailure())),
    )),
  );
}
