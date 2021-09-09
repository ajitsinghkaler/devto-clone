import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStore } from 'src/app/global/services/user/user.store';
import { UserArticlesStore } from '../article-detail/user/services/user-articles.store';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
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
