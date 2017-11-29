import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListRoutedComponent } from './item-list-routed.component';

describe('ItemListRoutedComponent', () => {
  let component: ItemListRoutedComponent;
  let fixture: ComponentFixture<ItemListRoutedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemListRoutedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemListRoutedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
