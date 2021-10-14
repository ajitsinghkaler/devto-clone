import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TagsApiService } from './tags-api.service';

import { TagsStore } from './tags.store';

const mockTags = [
  {
    id: 6,
    name: 'javascript',
    bg_color_hex: '#F7DF1E',
    text_color_hex: '#000000',
  },
  {
    id: 8,
    name: 'webdev',
    bg_color_hex: '#562765',
    text_color_hex: '#ffffff',
  },
];

const mockTagsService = {
  getTags: () => of([mockTags[0]]),
};

fdescribe('TagsStore', () => {
  let store: TagsStore;
  let tagsApiService: TagsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: TagsApiService, useValue: mockTagsService }],
    });
    store = TestBed.inject(TagsStore);
    tagsApiService = TestBed.inject(TagsApiService);
  });

  it('should be created', () => {
    expect(store).toBeTruthy();
  });

  it('should set initial state as in constructor', (done) => {
    store.state$.subscribe((tags) => {
      expect(tags).toEqual({ tags: [] });
      done();
    });
  });

  it('should change state as in setTags function', (done) => {
    store.setTags(mockTags);
    store.state$.subscribe((tags) => {
      expect(tags.tags.length).toBe(2);
      expect(tags.tags[1]).toEqual(mockTags[1]);
      done();
    });
  });

  it('should return the current value of the store tags', (done) => {
    store.setState({ tags: mockTags });
    store.tags$.subscribe((tags) => {
      expect(tags.length).toBe(2);
      expect(tags[1]).toEqual(mockTags[1]);
      done();
    });
  });

  it('tags$ property should return the current value of the store tags', (done) => {
    store.setState({ tags: [mockTags[0]] });
    store.tags$.subscribe((tags) => {
      expect(tags.length).toBe(1);
      done();
    });
  });

  it('should return the current value of the store tags if getTags Called', () => {
  });
});

