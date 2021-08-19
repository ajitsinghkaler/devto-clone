import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ArticleDetails } from 'src/app/models/articles';
import { Reaction } from 'src/app/models/reaction-data';
import { ArticleDetailApiService } from './article-detail-api.service';

interface ArticleState {
  article: ArticleDetails | null;
  reactions: Reaction[];
}
@Injectable()
export class ArticleDetailStore extends ComponentStore<ArticleState> {
  readonly article$ = this.select((state) => state.article);
  readonly reaction$ = this.select((state) => state.reactions);
  readonly setArticle = this.updater(
    (state: ArticleState, article: ArticleDetails) => ({
      ...state,
      article,
    })
  );

  readonly setReactions = this.updater(
    (state: ArticleState, reactions: Reaction[]) => ({
      ...state,
      reactions,
    })
  );
  readonly getArticle = this.effect((params: Observable<Params>) =>
    params.pipe(
      switchMap((params) =>
        this.articleDetailApiS.getArticle(params.user, params.slug).pipe(
          tapResponse(
            (article) => this.setArticle(article),
            (error) => this.logError(error)
          )
        )
      )
    )
  );
  readonly getReactions = this.effect((id: Observable<number>) =>
    id.pipe(
      switchMap((id) =>
        this.articleDetailApiS.getArticleReactions(id).pipe(
          tapResponse(
            (reactions) => this.setReactions(reactions),
            (error) => this.logError(error)
          )
        )
      )
    )
  );
  constructor(private articleDetailApiS: ArticleDetailApiService) {
    super({ article: null, reactions: [] });
  }

  private logError(error: unknown) {
    console.error(error);
  }
}
