import { TestBed } from '@angular/core/testing';

import { ListingsApiService } from './listings-api.service';

describe('ListingsApiService', () => {
  let service: ListingsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
