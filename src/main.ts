import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { Observable } from 'rxjs/_esm5/Observable';
import 'rxjs/_esm5/add/observable/from';

// Toggling these should produce no change in build size
import { map } from 'rxjs/_esm5/operators/index';
// import { map } from 'rxjs/_esm5/operators/map';

Observable.from([1, 2, 3])
  .pipe(map(n => n * n))
  .subscribe(n => console.log('Squared N: ' + n));

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
