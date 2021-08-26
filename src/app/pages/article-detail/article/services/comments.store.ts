import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Comment } from 'src/app/models/comment';
import { CommentsApiService } from './comments-api.service';

interface CommentsState {
  comments: Comment[];
}

@Injectable({
  providedIn: 'root',
})
export class CommentsStore extends ComponentStore<CommentsState> {
  readonly comments$ = this.select((state) => state.comments);
  readonly setComments = this.updater(
    (state: CommentsState, comments: Comment[]) => ({
      ...state,
      comments,
    })
  );

  readonly getComments = this.effect((id: Observable<number>) =>
    id.pipe(
      switchMap((id) =>
        this.commetsApiS.getComments(id).pipe(
          tapResponse(
            (comments) => this.setComments(comments),
            (error) => this.logError(error)
          )
        )
      )
    )
  );

  constructor(private commetsApiS: CommentsApiService) {
    super({ comments: [] });
  }

  private logError(error: unknown) {
    console.error(error);
  }
}
