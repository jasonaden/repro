import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-bar',
  templateUrl: './error-bar.component.html',
  styleUrls: ['./error-bar.component.css']
})
export class ErrorBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // If we catch the error, routing doesn't produce duplicates
    // try {
    //   throw new Error('Uncaught error!');
    // } catch (e) {}

    // If we throw an uncaught error, routing will produce these duplicates
    // as long as the module includes BrowserAnimationsModule
    throw new Error('Uncaught error!');
  }

}
