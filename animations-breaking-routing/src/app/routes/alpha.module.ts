import { Component, NgModule } from '@angular/core';
import { RouterModule, Router, ActivatedRoute, ChildActivationStart, ChildActivationEnd, ActivationStart, ActivationEnd, RouteConfigLoadStart, RouteConfigLoadEnd, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';

import { BetaModule, BetaComponent } from './beta.module';
import { GammaModule, GammaComponent } from './gamma.module';

const template = `
<div class="cmp alpha">
  Alpha!
  <a routerLink="beta">beta</a>
  <a routerLink="gamma">gamma</a>
  <router-outlet></router-outlet>
</div>
`;

@Component({
  selector: 'app-alpha',
  template: template
})
export class AlphaComponent {
  loading: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}

@NgModule({
  imports: [
    BetaModule,
    GammaModule,
    RouterModule.forChild([
      {path: 'alpha', component: AlphaComponent, children: [
        {path: 'beta', component: BetaComponent},
        {path: 'gamma', component: GammaComponent}
      ]}
    ])
  ],
  declarations: [AlphaComponent],
  exports: [AlphaComponent]
})
export class AlphaModule {}
