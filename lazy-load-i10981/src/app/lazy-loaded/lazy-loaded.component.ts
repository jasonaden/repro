import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-lazy-loaded',
  template: `
    <div class="lazy-loaded">
      <p>
        The <b><i>lazy-loaded.module</i></b> has been loaded and this is displayed from <b><i>lazy-loaded.component</i></b>.
      </p>

      <p>
        <a [routerLink]="[{ outlets: { aux: 'auxpath' } }]">Load an auxiliary route</a><br>
        (This only works if the route for 'aux' outlet is empty. As soon as we define a route, for example here 'auxpath', this part of the app is broken)
      </p>

      <hr><br>

      <p>
        <a routerLink="auxpath2">Workaround Attempt</a><br>
      </p>

      <hr><br>

      Here should be displayed the <b><i>non aux component</i></b> :<br>
      <router-outlet></router-outlet>

      <br><hr><br>
      On load here should be displayed <b><i>aux component</i></b> :<br>
      When the link is clicked, here should be displayed the <b><i>aux 2 component</i></b> :<br>
      <router-outlet name="aux"></router-outlet>
    </div>
`,
  styles: []
})
export class LazyLoadedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
