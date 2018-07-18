import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-non-aux',
  template: `
    <p>
      NonAuxComponent loaded
    </p>
  `,
  styles: []
})
export class NonAuxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
