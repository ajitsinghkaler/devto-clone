import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStore } from '@devto/global-services';
import { UserArticlesStore } from '@devto/global-services';

@Component({
  selector: 'app-user-profile',
  template: `<ng-container *rxLet="user$; let user">
      <app-user-header *ngIf="user" [user]="user"></app-user-header>
    </ng-container>

    <ng-container *ngFor="let article of articles$ | push">
      <app-article-card [article]="article"></app-article-card>
    </ng-container> `,
  styles: [
    `
      app-article-card {
        margin-left: auto;
        margin-right: auto;
        max-width: 994px;
      }
    `,
  ],
  viewProviders: [UserStore, UserArticlesStore],
})
export class UserProfileComponent implements OnInit {
  user$ = this.userStore.user$;
  articles$ = this.userArticles.articles$;
  constructor(
    private userStore: UserStore,
    private route: ActivatedRoute,
    private userArticles: UserArticlesStore
  ) {}
  ngOnInit() {
    this.userStore.getUser(this.route.snapshot.params.username);
    this.userArticles.getArticles({
      username: this.route.snapshot.params.username,
    });
  }
}
