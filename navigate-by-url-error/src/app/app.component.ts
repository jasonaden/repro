import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, Routes, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>App Root</h1>
    <router-outlet></router-outlet>
    <div ng-view></div>
  `,
})
export class AppComponent { }

@Component({
  selector: 'app-angular-cmp',
  template: `
    <div>
      <button (click)="changeToRoot()"> Change to root</button>
      <button (click)="dogParam()"> Dog url param</button>
      <button (click)="catParam()">Cat url param</button>
    </div>
  `
})
export class RoutableAngularComponent {
  constructor(private router: Router) { }

  changeToRoot() {
    this.router.navigateByUrl('/');
  }

  dogParam() {
    this.router.navigate([], { queryParams: { param: 'dog' } });
  }

  catParam() {
    this.router.navigate([], { queryParams: { param: 'cat' } });
  }
}

@Component({
  selector: 'app-empty-cmp',
  template: `<a href="#/ng2">go to links component</a>`
})
export class EmptyComponent { }
