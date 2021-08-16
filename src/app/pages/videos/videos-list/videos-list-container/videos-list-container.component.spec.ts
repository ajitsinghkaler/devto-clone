import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosListContainerComponent } from './videos-list-container.component';

describe('VideosListContainerComponent', () => {
  let component: VideosListContainerComponent;
  let fixture: ComponentFixture<VideosListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
