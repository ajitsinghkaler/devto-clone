import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsHeaderComponent } from './listings-header.component';

describe('ListingsHeaderComponent', () => {
  let component: ListingsHeaderComponent;
  let fixture: ComponentFixture<ListingsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
