import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SidebarTagsComponent } from './sidebar-tags/sidebar-tags.component';
import { SidebarAdvertisementComponent } from './sidebar-advertisement/sidebar-advertisement.component';
import { SidebarSocialLinksComponent } from './sidebar-social-links/sidebar-social-links.component';

@NgModule({
  declarations: [SidebarComponent, SidebarTagsComponent, SidebarAdvertisementComponent, SidebarSocialLinksComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SidebarComponent,
      },
    ]),
  ],
})
export class HomeModule {}
