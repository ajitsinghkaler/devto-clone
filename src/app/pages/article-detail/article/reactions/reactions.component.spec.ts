import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactionsComponent } from './reactions.component';

describe('ReactionsComponent', () => {
  let component: ReactionsComponent;
  let fixture: ComponentFixture<ReactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
