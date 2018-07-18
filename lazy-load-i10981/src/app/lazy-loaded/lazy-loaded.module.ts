import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadedComponent } from './lazy-loaded.component';
import { LazyLoadedRoutingModule } from './lazy-loaded-routing.module';
import { NonAuxComponent } from '../non-aux/non-aux.component';
import { AuxComponent } from '../aux/aux.component';
import { Aux2Component } from '../aux2/aux2.component';

@NgModule({
  imports: [
    CommonModule,
    LazyLoadedRoutingModule
  ],
  declarations: [ LazyLoadedComponent, NonAuxComponent, AuxComponent, Aux2Component ]
})
export class LazyLoadedModule { }
