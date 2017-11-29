import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-error',
  template: `<div>ErrorComponent</div>`,
})
export class ErrorComponent implements OnInit {
  ngOnInit() {
    throw Error('Error on purpose!');
  }
}
