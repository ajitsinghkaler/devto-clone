import { Component } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})
export class ArticleHeaderComponent {
  selectedTab = 'feed';
  tabs = ['feed', 'week', 'month', 'year', 'infinity', 'latest'];
}
