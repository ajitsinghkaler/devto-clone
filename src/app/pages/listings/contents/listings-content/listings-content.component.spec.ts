import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsContentComponent } from './listings-content.component';

describe('ListingsContentComponent', () => {
  let component: ListingsContentComponent;
  let fixture: ComponentFixture<ListingsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
