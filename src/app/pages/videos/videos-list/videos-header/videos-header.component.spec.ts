import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosHeaderComponent } from './videos-header.component';

describe('VideosHeaderComponent', () => {
  let component: VideosHeaderComponent;
  let fixture: ComponentFixture<VideosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
