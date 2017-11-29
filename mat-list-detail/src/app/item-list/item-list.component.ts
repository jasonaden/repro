import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { DataService, Item } from '../data.service';
import { ISubscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  displayedColumns = ['id', 'subject', 'status', 'updated'];
  dataSource = new MatTableDataSource<Item>();
  sub: ISubscription;

  constructor(public dataService: DataService, public router: Router) {}

  ngOnInit() {
    this.sub = this.dataService.list().subscribe(d => this.dataSource.data = d);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  routeTo(id: string) {
    this.router.navigateByUrl('/detail/' + id);
  }

}
