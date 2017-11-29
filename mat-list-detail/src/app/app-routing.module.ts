import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListRoutedComponent } from './item-list-routed/item-list-routed.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'list', component: ItemListRoutedComponent},
  {path: 'detail/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
