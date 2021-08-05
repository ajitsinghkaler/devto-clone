import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/articles';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ArticleApiService } from '../../articles/services/article-api.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

interface ArticlesState {
  articles: Article[];
}
@Injectable({
  providedIn: 'root',
})
export class ArticleTagsStore extends ComponentStore<ArticlesState> {
  readonly articles$ = this.select((state) => state.articles);

  readonly setArticles = this.updater(
    (state: ArticlesState, articles: Article[]) => ({
      ...state,
      articles: articles,
    })
  );

  readonly getArticles = this.effect(
    (params: Observable<Record<string, string | number | boolean>>) =>
      params.pipe(
        switchMap((params) =>
          this.articleApiS.getArticles({ ...params, top: 3 }).pipe(
            tapResponse(
              (articles) => this.setArticles(articles),
              (error) => this.logError(error)
            )
          )
        )
      )
  );

  constructor(private articleApiS: ArticleApiService) {
    super({ articles: [] });
  }

  logError(error: unknown) {
    console.error(error);
  }
}
