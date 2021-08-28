import { Component } from '@angular/core';
import { TABS } from 'src/app/constants/app.constants';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss'],
})
export class ArticleHeaderComponent {
  selectedTab = 'feed';
  tabs = TABS;
  constructor() {}
}
