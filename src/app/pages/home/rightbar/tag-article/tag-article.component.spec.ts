import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagArticleComponent } from './tag-article.component';

describe('TagArticleComponent', () => {
  let component: TagArticleComponent;
  let fixture: ComponentFixture<TagArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
