import { TestBed } from '@angular/core/testing';

import { UserStore } from './user.store';

describe('UserService', () => {
  let service: UserStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
