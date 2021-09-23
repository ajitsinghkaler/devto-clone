import { TestBed } from '@angular/core/testing';

import { CommentsStore } from './comments.store';

describe('CommentsStore', () => {
  let service: CommentsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
