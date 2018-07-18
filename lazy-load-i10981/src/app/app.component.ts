import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'll-root',
  template: `
    <div>
      <h2>Angular {{version}}</h2>
    </div>
    <div>
      <a routerLink="lazy">Demo (click to lazy load the module)</a>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  version = VERSION.full;
}
