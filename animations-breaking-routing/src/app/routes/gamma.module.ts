import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const template = `
<div class="cmp gamma">
  Gamma!
</div>
`;

@Component({
  selector: 'app-gamma',
  template: template
})
export class GammaComponent {}

@NgModule({
  imports: [],
  declarations: [GammaComponent],
  exports: [GammaComponent]
})
export class GammaModule {}
