import { Component, Input} from '@angular/core';
import { ArticleDetails } from '@devto/core/models';

@Component({
  selector: 'app-article-details',
  template: `<article class="card article mb-4">
    <header>
      <div class="article-cover" *ngIf="article.cover_image">
        <img
          [src]="article.cover_image"
          width="1000"
          height="420"
          style="background-color: #dddddd"
          alt="Cover image for {{ article.title }}"
        />
      </div>

      <div class="article-header">
        <h1>
          {{ article.title }}
        </h1>
        <div class="flex article-tags">
          <a class="article-tag" *ngFor="let tag of article.tags">
            #{{ tag }}
          </a>
        </div>

        <div class="article-subheader flex">
          <a
            routerLink="/{{ article.user.username }}"
            class="flex align-center"
          >
            <div class="article-avatar">
              <img
                [src]="article.user.profile_image_90"
                [alt]="article.user.username"
              />
            </div>
            <div class="article-user-name">{{ article.user.name }}</div>
          </a>

          <span class="subheader-meta-info flex align-center">
            <time
              datetime="2021-08-04T15:38:54Z"
              class="date-no-year"
              title="Wednesday, 4 August 2021, 21:08:54"
              >{{ article.readable_publish_date }}</time
            >

            <em *ngIf="article.edited_at">
              ・ Updated on {{ article.edited_at | date: 'MMM d' }}</em
            >
            <span> ・ {{ article.reading_time_minutes }} min read</span>
          </span>
          <span id="action-space" class="mb-4 s:mb-0"></span>
        </div>
      </div>
    </header>

    <div class="body-html" [innerHTML]="article?.body_html"></div>
    <app-comments-tree
      [commentsCount]="article.comments_count"
    ></app-comments-tree>
  </article> `,
  styles: [
    `
      :host {
        border-radius: 5px;
        background-color: #fff;
        color: #08090a;
        box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.1);
        overflow-wrap: anywhere;
        display: block;
        .article-cover {
          position: relative;
          width: 100%;
          padding-top: 42%;
          img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 5px 5px 0 0;
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        }

        .article-header {
          padding: 2rem 4rem 0 4rem;
          h1 {
            font-size: 3rem;
            font-weight: 800;
            line-height: 1.25;
            margin-bottom: 1rem;
          }
        }

        .article-tag {
          font-size: 0.875rem;
          line-height: 1.3;
          border-radius: 5px;
          padding: 0.25rem;
          display: inline-block;
          margin-right: 0.25rem;
          color: #64707d;
        }

        .article-tags {
          margin-bottom: 1rem;
        }

        .article-subheader {
          img {
            border-radius: 100%;
            width: 100%;
            height: 100%;
            display: inline-block;
            vertical-align: bottom;
          }

          .article-avatar {
            width: 2rem;
            margin-right: 0.25rem;
            height: 2rem;
          }
        }

        .article-user-name {
          padding: 0.5rem;
          &:hover {
            background-color: rgba(0, 0, 0, 0.035);
          }
        }

        .subheader-meta-info {
          font-size: 0.875rem;
          color: #64707d;
        }
      }
    `,
  ],
})
export class ArticleDetailsComponent {
  @Input() article!: ArticleDetails;
}
