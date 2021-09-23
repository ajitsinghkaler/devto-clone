import { Component } from '@angular/core';
import { ArticleStore } from '../services/article.store';

@Component({
  selector: 'app-article-container',
  template: `<app-article-header></app-article-header>
    <app-featured-article
      [featured]="featuredArticle$ | push"
    ></app-featured-article>
    <ng-container *ngFor="let article of articles$ | push">
      <app-article-card [article]="article"></app-article-card>
    </ng-container> `,
})
export class ArticleContainerComponent {
  articles$ = this.articleStore.articles$;
  featuredArticle$ = this.articleStore.featuredArticle$;

  constructor(private articleStore: ArticleStore) {}
}
