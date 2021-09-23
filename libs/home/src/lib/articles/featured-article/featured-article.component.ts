import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@devto/core/models';

@Component({
  selector: 'app-featured-article',
  template: `<a
      routerLink="/{{
        this.featured?.organization?.slug || this.featured?.user?.username
      }}/{{ featured?.slug }}"
      class="featured-img"
      style.background-image="url({{ featured?.cover_image }})"
    ></a>
    <!-- Todo make featured title big -->
    <app-article-card *ngIf="featured" [article]="featured">
      <h3
        routerLink="/{{
          this.featured?.organization?.slug || this.featured?.user?.username
        }}/{{ featured.slug }}"
        class="featured-title"
      >
        {{ featured?.title }}
      </h3>
    </app-article-card> `,
  styles: [
    `
      :host {
        display: block;
        background-color: #fff;
        box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.1);
        border-radius: 5px;
        cursor: pointer;
        margin: 0 0 0.75rem;
        overflow: hidden;
        &:focus-within {
          outline: none;
          box-shadow: 0 0 0 2px #3b49df;
        }
      }

      app-article-card {
        box-shadow: none;
        margin: 0 0 0;
        &:focus-within {
          outline: none;
          box-shadow: none;
        }
      }

      .featured-img {
        display: block;
        width: 100%;
        height: auto;
        padding-bottom: 42%;
        background-size: cover;
        background-position: center center;
      }

      .featured-title {
        font-size: 1.875rem;
      }
    `,
  ],
})
export class FeaturedArticleComponent {
  @Input() featured!: Article;
}
