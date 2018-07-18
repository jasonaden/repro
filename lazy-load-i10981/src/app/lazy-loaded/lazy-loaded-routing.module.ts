import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadedComponent } from './lazy-loaded.component';
import { NonAuxComponent } from '../non-aux/non-aux.component';
import { AuxComponent } from '../aux/aux.component';
import { Aux2Component } from '../aux2/aux2.component';

const routes: Routes = [
  {
    path: '',
    component: LazyLoadedComponent,
    children: [
      {
        path: '',
        component: NonAuxComponent
      },
      {
        path: '', // this works when going to /lazy
        outlet: 'aux',
        children: [
          {
            path: '',
            component: AuxComponent
          },
          {
            path: 'auxpath2',
            component: Aux2Component
          },
        ]
      },
      // {
      //   path: 'auxpath', // can't make it work
      //   component: Aux2Component,
      //   outlet: 'aux'
      // },
      // {
      //   path: 'auxpath2', children: [
      //     {
      //       path: '',
      //       component: Aux2Component,
      //       outlet: 'aux'
      //     }
      //   ]
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadedRoutingModule { }
