import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatTableModule, MatTabsModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';

import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { ListHeaderComponent } from './list-header/list-header.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemListRoutedComponent } from './item-list-routed/item-list-routed.component';
import { DataService } from './data.service';
import { ErrorBarComponent } from './error-bar/error-bar.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
    AppRoutingModule,
    MatCardModule,
    MatTableModule,
    MatTabsModule,
    CdkTableModule
  ],
  declarations: [ AppComponent, ItemListComponent, ItemComponent, ListHeaderComponent, ItemListRoutedComponent, ErrorBarComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ DataService ]
})
export class AppModule { }
