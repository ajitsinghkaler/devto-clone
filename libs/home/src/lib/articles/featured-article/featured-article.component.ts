import { Component, Input, OnInit } from '@angular/core';
import { Article } from '@devto/core/models';

@Component({
  selector: 'app-featured-article',
  templateUrl: './featured-article.component.html',
  styleUrls: ['./featured-article.component.scss'],
})
export class FeaturedArticleComponent {
  @Input() featured!: Article;
  constructor() {}
}
