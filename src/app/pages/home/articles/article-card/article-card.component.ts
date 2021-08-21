import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Article } from 'src/app/models/articles';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.scss'],
})
export class ArticleCardComponent implements OnChanges {
  @Input() article!: Article;
  uriSection = '';
  constructor() {}

  ngOnChanges(): void {
    this.uriSection =
      this.article?.organization?.slug || this.article.user.username;
  }
}
