import { TestBed } from '@angular/core/testing';

import { UserArticlesStore } from './user-articles.store';

describe('UserArticlesService', () => {
  let service: UserArticlesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserArticlesStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
