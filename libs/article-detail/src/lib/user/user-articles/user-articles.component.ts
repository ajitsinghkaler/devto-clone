import { Component, Input } from '@angular/core';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { ArticleDetailStore } from '../../article/services/article-detail.store';
import { UserArticlesStore } from '@devto/global-services';

@Component({
  selector: 'app-user-articles',
  template: `<ng-container
    *rxLet="userArticles$; let articles; let err = $error"
  >
    <section>
      <header class="flex align-center">
        <h3>
          More From <a>{{ name }}</a>
        </h3>
      </header>
      <a
        *ngFor="let article of articles"
        class="listing-item"
        href="/listings/forhire/react-js-195j"
      >
        <div class="title">{{ article.title }}</div>
        <div class="flex article-tags">
          <span class="article-tag" *ngFor="let tag of article.tag_list">
            #{{ tag }}
          </span>
        </div>
      </a>
      <ng-template #suspense>loading</ng-template>
      <ng-template #error>loading</ng-template>
    </section>
  </ng-container> `,
  styles: [
    `
      header {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #eef0f1;
        h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .see-all-link {
          font-weight: 500;
          font-size: 0.875rem;
          color: #3b49df;
        }
      }

      .listing-item {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid #eef0f1;
        color: #202428;
        &:hover {
          background-color: #fff;
          .title {
            color: #323ebe;
          }
        }
      }

      .listing-type {
        color: #64707d;
        font-size: 0.875rem;
        padding-top: 0.25rem;
      }

      .create-listing {
        font-weight: 500;
        padding: 0.75rem;
        font-size: 0.875rem;
        text-align: center;
        color: #202428;
        display: block;
      }

      :host {
        background-color: #f9fafa;
        color: #202428;
        box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.05);
        display: block;
        border-radius: 5px;
      }

      .article-tag {
        font-size: 0.875rem;
        line-height: 1.3;
        border-radius: 5px;
        padding: 0.25rem;
        margin-right: 0.25rem;
        color: #64707d;
      }

      .article-tags {
        margin-left: -0.25rem;
        padding-top: 0.25rem;
        display: inline;
      }
    `,
  ],
})
export class UserArticlesComponent {
  @Input() name = '';
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
