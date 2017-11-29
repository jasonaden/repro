import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const template = `
<div class="cmp beta">
  Beta!
</div>
`;

@Component({
  selector: 'app-beta',
  template: template
})
export class BetaComponent {}

@NgModule({
  declarations: [BetaComponent],
  exports: [BetaComponent]
})
export class BetaModule {}
