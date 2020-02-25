import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

import { beerSearchStart } from '~/actions/beers';

export default function () {
  return of(beerSearchStart('')).pipe(delay(1000));
}
