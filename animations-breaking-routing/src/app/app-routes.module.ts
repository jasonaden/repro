import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    // BrowserAnimationsModule,
    RouterModule.forRoot([{
      path: '', redirectTo: '/alpha', pathMatch: 'full'
    }], {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutesModule {}
