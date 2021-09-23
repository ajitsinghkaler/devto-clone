import { TestBed } from '@angular/core/testing';

import { ArticleDetailApiService } from './article-detail-api.service';

describe('ArticleDetailApiService', () => {
  let service: ArticleDetailApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleDetailApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
