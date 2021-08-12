import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { CommentsComponent } from './article/comments/comments.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserArticlesComponent } from './user/user-articles/user-articles.component';
import { RouterModule } from '@angular/router';
import { ReactionsComponent } from './article/reactions/reactions.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { ArticleDetailComponent } from './article-detail.component';
import { LetModule, PushModule } from '@rx-angular/template';

@NgModule({
  declarations: [
    ArticleDetailsComponent,
    CommentsComponent,
    UserDetailComponent,
    UserArticlesComponent,
    ReactionsComponent,
    ReadMoreComponent,
    ArticleDetailComponent,
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: ArticleDetailComponent,
      },
    ]),
    CommonModule,
    LetModule,
    PushModule,
  ]
})
export class ArticleDetailModule { }
