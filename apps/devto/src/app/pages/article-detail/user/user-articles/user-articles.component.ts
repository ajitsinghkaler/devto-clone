import { Component, Input } from '@angular/core';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { ArticleDetailStore } from '../../article/services/article-detail.store';
import { UserArticlesStore } from '../services/user-articles.store';

@Component({
  selector: 'app-user-articles',
  templateUrl: './user-articles.component.html',
  styleUrls: ['./user-articles.component.scss'],
})
export class UserArticlesComponent {
  @Input() name: string = '';
  userArticles$ = this.userArticleStore.articles$.pipe(
    withLatestFrom(this.articleDetailsStore.article$),
    map(([articles, articleDetails]) => {
      let index = 0;
      articles.find((article, idx) => {
        index = idx;
        return article.id === articleDetails?.id;
      });
      articles.splice(index, 1);
      return articles.slice(0, 3);
    })
  );
  constructor(
    private userArticleStore: UserArticlesStore,
    private articleDetailsStore: ArticleDetailStore
  ) {}
}
