import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ArticleDetails } from 'src/app/models/articles';
import { ArticleDetailApiService } from './article-detail-api.service';

interface ArticleState {
  article: ArticleDetails | null;
}
@Injectable()
export class ArticleDetailStore extends ComponentStore<ArticleState> {
  readonly article$ = this.select((state) => state.article);
  readonly setArticle = this.updater(
    (state: ArticleState, article: ArticleDetails) => ({
      ...state,
      article,
    })
  );
  readonly getArticle = this.effect(
    (params: Observable<Params>) =>
      params.pipe(
        switchMap((params) =>
          this.articleDetailApiS.getArticles(params.user, params.slug).pipe(
            tapResponse(
              (article) => this.setArticle(article),
              (error) => this.logError(error)
            )
          )
        )
      )
  );
  constructor(private articleDetailApiS: ArticleDetailApiService, private route: ActivatedRoute) {
    super({ article: null });
  }

  private logError(error: unknown) {
    console.error(error);
  }
}
