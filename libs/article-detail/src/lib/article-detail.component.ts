import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserStore } from '@devto/global-services';
import { ArticleDetailStore } from './article/services/article-detail.store';
import { CommentsStore } from './article/services/comments.store';
import { UserArticlesStore } from '@devto/global-services';

@Component({
  selector: 'app-article-detail',
  template: `<aside>
      <app-reactions [reactions]="reaction$ | push"></app-reactions>
    </aside>
    <ng-container *rxLet="article$; let article">
      <app-article-details
        *ngIf="article"
        [article]="article"
      ></app-article-details>
    </ng-container>
    <ng-container *rxLet="user$; let user">
      <app-user-detail *ngIf="user" [user]="user"></app-user-detail>
    </ng-container> `,
  styles: [
    `
      :host {
        display: grid;
        grid-gap: 1rem;
        /*
          minmax is used becasue of grid blowout because of the pre tag
          For details refer https://css-tricks.com/preventing-a-grid-blowout/ 
        */
        grid-template-columns: 4rem minmax(0, 7fr) minmax(0, 3fr);
      }
    `,
  ],
  viewProviders: [ArticleDetailStore, UserStore, CommentsStore],
})
export class ArticleDetailComponent implements OnInit {
  article$ = this.articleDetailStore.article$.pipe(
    tap((article) => {
      if (article?.user) {
        this.userStore.getUser(article.user.username);
        this.articleUserStore.getArticles({ username: article.user.username });
        this.articleDetailStore.getReactions(article.id);
        this.commentsStore.getComments(article.id);
      }
    })
  );
  reaction$ = this.articleDetailStore.reaction$;
  user$ = this.userStore.user$;
  constructor(
    private articleDetailStore: ArticleDetailStore,
    private route: ActivatedRoute,
    private userStore: UserStore,
    private articleUserStore: UserArticlesStore,
    private commentsStore: CommentsStore
  ) {}

  ngOnInit(): void {
    this.articleDetailStore.getArticle(this.route.params);
  }
}
