import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { CommentsComponent } from './article/comments/comments.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserArticlesComponent } from './user/user-articles/user-articles.component';
import { RouterModule } from '@angular/router';
import { ReactionsComponent } from './article/reactions/reactions.component';
import { ArticleDetailComponent } from './article-detail.component';
import { LetModule, PushModule } from '@rx-angular/template';
import { CommentsTreeComponent } from './article/comments-tree/comments-tree.component';

@NgModule({
  declarations: [
    ArticleDetailsComponent,
    CommentsComponent,
    UserDetailComponent,
    UserArticlesComponent,
    ReactionsComponent,
    ArticleDetailComponent,
    CommentsTreeComponent,
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
  ],
})
export class ArticleDetailModule {}
