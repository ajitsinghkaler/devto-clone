import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UserStore } from 'src/app/global/services/user/user.store';
import { ArticleDetailStore } from './article/services/article-detail.store';
import { UserArticlesStore } from './user/services/user-articles.store';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  providers: [ArticleDetailStore, UserStore],
})
export class ArticleDetailComponent implements OnInit {
  article$ = this.articleDetailStore.article$.pipe(
    tap((article) => {
      if (article?.user) {
        this.userStore.getUser(article.user.username);
        this.articleUserStore.getArticles({ username: article.user.username });
        this.articleDetailStore.getReactions(article.id);
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
  ) {}

  ngOnInit(): void {
    this.articleDetailStore.getArticle(this.route.params);
  }
}
