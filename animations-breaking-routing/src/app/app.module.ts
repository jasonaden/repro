import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutesModule } from './app-routes.module';
import { AppErrorHandler } from './app.error-handler';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error.component';

import { AlphaModule } from './routes/alpha.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    AppRoutesModule,
    AlphaModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
  ],
  declarations: [ AppComponent, ErrorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
