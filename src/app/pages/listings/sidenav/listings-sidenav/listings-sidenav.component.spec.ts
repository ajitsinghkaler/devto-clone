import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsSidenavComponent } from './listings-sidenav.component';

describe('ListingsSidenavComponent', () => {
  let component: ListingsSidenavComponent;
  let fixture: ComponentFixture<ListingsSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingsSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
