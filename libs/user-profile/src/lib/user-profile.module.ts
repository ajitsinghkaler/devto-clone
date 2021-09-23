import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@rx-angular/template';
import { ArticleCardModule } from '../../../../libs/home/src/lib/articles/article-card/article-card.component';

@NgModule({
  declarations: [UserProfileComponent, UserHeaderComponent],
  imports: [
    ArticleCardModule,
    LetModule,
    PushModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserProfileComponent,
      },
    ]),
  ],
})
export class UserProfileModule {}
