import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'item-list-routed',
  templateUrl: './item-list-routed.component.html',
  styleUrls: ['./item-list-routed.component.css']
})
export class ItemListRoutedComponent implements OnInit {

  showHeader = true;

  constructor() { }

  ngOnInit() {
  }

}
