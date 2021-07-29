import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightbarContainerComponent } from './rightbar-container.component';

describe('RightbarContainerComponent', () => {
  let component: RightbarContainerComponent;
  let fixture: ComponentFixture<RightbarContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightbarContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightbarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
