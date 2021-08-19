import { TestBed } from '@angular/core/testing';

import { ArticleDetailStore } from './article-detail.store';

describe('ArticleDetailStore', () => {
  let service: ArticleDetailStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDetailStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
