import { Component, Input, OnInit } from '@angular/core';
import { ArticleTagsStore } from '../services/article-tags.store';

@Component({
  selector: 'app-tag-article',
  template: `<section>
    <header class="flex align-center">
      <h3>#{{ tag }}</h3>
    </header>

    <div *rxLet="article$; let articles; let err = $error">
      <a
        *ngFor="let article of articles"
        class="listing-item"
        href="/listings/forhire/react-js-195j"
      >
        <div>{{ article.title }}</div>
        <div class="listing-type">{{ article.comments_count }} comments</div>
      </a>
    </div>
    <ng-template #suspense>loading</ng-template>
    <ng-template #error>loading</ng-template>
  </section> `,
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
    `,
  ],
  viewProviders: [ArticleTagsStore],
})
export class TagArticleComponent implements OnInit {
  @Input() tag = '';
  article$ = this.articleStore.articles$;

  constructor(private articleStore: ArticleTagsStore) {}

  ngOnInit(): void {
    this.articleStore.getArticles({ tag: this.tag });
  }
}
