import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { delay } from 'rxjs/operators';

export interface Item {
  id: string;
  subject: string;
  status: string;
  updated: Date;
}

const items: Item[] = [
  {id: '00119401', subject: 'edit case', status: 'New', updated: new Date(2017, 11, 27)},
  {id: '00119434', subject: 'A mischievous creation', status: 'New', updated: new Date(2017, 11, 13)},
  {id: '00119435', subject: 'Creating a barrier', status: 'New', updated: new Date(2017, 11, 13)},
  {id: '00119436', subject: 'A new case awaits.', status: 'New', updated: new Date(2017, 11, 13)},
  {id: '00119504', subject: 'Testing', status: 'New', updated: new Date(2017, 11, 22)},
  {id: '00119506', subject: '234234', status: 'Assigned', updated: new Date(2017, 11, 22)},
  {id: '00119520', subject: 'Slowpoke', status: 'New', updated: new Date(2017, 11, 27)},
  {id: '00119521', subject: 'Slowbro', status: 'New', updated: new Date(2017, 11, 27)},
  {id: '00119522', subject: 'Slowking', status: 'New', updated: new Date(2017, 11, 27)},
  {id: '00119537', subject: 'Happy test issue', status: 'New', updated: new Date(2017, 11, 29)}
];

@Injectable()
export class DataService {

  constructor() { }

  list() {
    return of(items).pipe(delay(0));
  }

  get(id) {
    return of(items.find(i => i.id === id)).pipe(delay(0));
  }

  connect() {
    return this.list();
  }

}
