import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ArticleDetails } from 'src/app/models/articles';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ArticleDetailsComponent implements OnInit {
  @Input() article!: ArticleDetails;
  constructor() {}

  ngOnInit(): void {}
}
