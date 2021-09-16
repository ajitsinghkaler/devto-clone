import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarTagsComponent } from './sidebar/sidebar-tags/sidebar-tags.component';
import { SidebarAdvertisementComponent } from './sidebar/sidebar-advertisement/sidebar-advertisement.component';
import { SidebarSocialLinksComponent } from './sidebar/sidebar-social-links/sidebar-social-links.component';
import { FeaturedArticleComponent } from './articles/featured-article/featured-article.component';
import {
  ArticleCardComponent,
  ArticleCardModule,
} from './articles/article-card/article-card.component';
import { ArticleContainerComponent } from './articles/article-container/article-container.component';
import { ArticleHeaderComponent } from './articles/article-header/article-header.component';
import { HomeComponent } from './home.component';
import { LetModule, PushModule } from '@rx-angular/template';
import { ListingsComponent } from './rightbar/listings/listings.component';
import { RightbarContainerComponent } from './rightbar/rightbar-container/rightbar-container.component';
import { TagArticleComponent } from './rightbar/tag-article/tag-article.component';
@NgModule({
  declarations: [
    SidebarComponent,
    SidebarTagsComponent,
    SidebarAdvertisementComponent,
    SidebarSocialLinksComponent,
    FeaturedArticleComponent,
    ArticleContainerComponent,
    ArticleHeaderComponent,
    HomeComponent,
    ListingsComponent,
    RightbarContainerComponent,
    TagArticleComponent,
  ],
  imports: [
    LetModule,
    ArticleCardModule,
    PushModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
      },
    ]),
  ],
})
export class HomeModule {}
