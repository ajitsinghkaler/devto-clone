import { TestBed } from '@angular/core/testing';

import { ArticleTagsStore } from './article-tags.store';

describe('ArticleTagsService', () => {
  let service: ArticleTagsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleTagsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
