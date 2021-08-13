import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { ArticleApiService } from 'src/app/global/services/article/article-api.service';
import { Article } from '../../../../models/articles';

interface ArticlesState {
  articles: Article[];
  featured?: Article;
}

@Injectable({
  providedIn: 'root',
})
export class ArticleStore extends ComponentStore<ArticlesState> {
  readonly articles$ = this.select((state) => state.articles);
  readonly featuredArticle$ = this.select((state) => state.featured);
  readonly setArticles = this.updater(
    (state: ArticlesState, articles: Article[]) => {
      let index = 0;
      articles.find((article, idx) => {
        index = idx;
        return article.cover_image;
      });
      let featured = articles.splice(index, 1)[0];
      return {
        ...state,
        featured: featured,
        articles: articles,
      };
    }
  );
  readonly getArticles = this.effect(() =>
    this.articleApiS.getArticles({ state: 'rising' }).pipe(
      tapResponse(
        (articles) => this.setArticles(articles),
        (error) => this.logError(error)
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
