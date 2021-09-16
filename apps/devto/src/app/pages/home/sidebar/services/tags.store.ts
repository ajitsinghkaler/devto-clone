import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Tag } from '@devto/core/models';
import { TagsApiService } from './tags-api.service';

interface TagsState {
  tags: Tag[];
}

@Injectable({
  providedIn: 'root',
})
export class TagsStore extends ComponentStore<TagsState> {
  readonly tags$ = this.select((state) => state.tags);
  readonly getTags = this.effect(() =>
    this.tagsApiS.getTags().pipe(
      tapResponse(
        (tags) => this.setTags(tags),
        (error) => this.logError(error)
      )
    )
  );

  readonly setTags = this.updater((state: TagsState, tags: Tag[]) => ({
    ...state,
    tags,
  }));

  constructor(private readonly tagsApiS: TagsApiService) {
    super({ tags: [] });
  }

  logError(error: unknown) {
    console.error(error);
  }
}
