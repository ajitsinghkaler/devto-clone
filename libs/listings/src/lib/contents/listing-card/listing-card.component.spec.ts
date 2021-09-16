import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingCardComponent } from './listing-card.component';

describe('ListingCardComponent', () => {
  let component: ListingCardComponent;
  let fixture: ComponentFixture<ListingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
