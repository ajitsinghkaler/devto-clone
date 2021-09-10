import { TestBed } from '@angular/core/testing';

import { VideoslistApiService } from './videoslist-api.service';

describe('VideoslistApiService', () => {
  let service: VideoslistApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoslistApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
