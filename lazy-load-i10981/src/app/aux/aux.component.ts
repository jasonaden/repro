import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'll-aux',
  template: `
    <p>
      AuxComponent loaded
    </p>
  `,
  styles: []
})
export class AuxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
