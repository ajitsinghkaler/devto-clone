import { TestBed } from '@angular/core/testing';

import { TagsApiService } from './tags-api.service';

describe('TagsApiService', () => {
  let service: TagsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
