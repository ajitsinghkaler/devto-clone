import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleDetailStore } from './article/services/article-detail.store';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
  providers: [ArticleDetailStore]
})
export class ArticleDetailComponent implements OnInit {

  article$ = this.articleStore.article$;
  constructor(
    private articleStore: ArticleDetailStore,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.articleStore.getArticle(this.route.params);
  }

}
