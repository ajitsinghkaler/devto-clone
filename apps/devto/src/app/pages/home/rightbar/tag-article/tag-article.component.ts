import { Component, Input, OnInit } from '@angular/core';
import { ArticleStore } from '../../articles/services/article.store';
import { ArticleTagsStore } from '../services/article-tags.store';

@Component({
  selector: 'app-tag-article',
  templateUrl: './tag-article.component.html',
  styleUrls: ['./tag-article.component.scss'],
  viewProviders: [ArticleTagsStore],
})
export class TagArticleComponent implements OnInit {
  @Input() tag: string = '';
  article$ = this.articleStore.articles$;

  constructor(private articleStore: ArticleTagsStore) {}

  ngOnInit(): void {
    this.articleStore.getArticles({ tag: this.tag });
  }
}
