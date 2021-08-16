import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosContainerComponent } from './videos-container.component';

describe('VideosContainerComponent', () => {
  let component: VideosContainerComponent;
  let fixture: ComponentFixture<VideosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
