import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import * as angular from 'angular';

import { AppComponent, RoutableAngularComponent, EmptyComponent } from './app.component';

export const routes: Route[] = [
  { path: 'ng2', component: RoutableAngularComponent },
  { path: '', component: EmptyComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    RoutableAngularComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
