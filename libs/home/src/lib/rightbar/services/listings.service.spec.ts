import { TestBed } from '@angular/core/testing';

import { ListingsStore } from './listings.store';

describe('ListingsStore', () => {
  let service: ListingsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListingsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
