import { TestBed } from '@angular/core/testing';

import { TagsStore } from './tags.store';

describe('TagsService', () => {
  let service: TagsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
