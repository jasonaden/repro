import { Component, OnInit } from '@angular/core';
import { DataService, Item } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item = {} as any;
  sub: ISubscription;
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.dataService.get(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe(item => this.item = item);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
