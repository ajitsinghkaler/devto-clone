import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LetModule, PushModule } from '@rx-angular/template';
import { VideosComponent } from './videos.component';
import { VideosHeaderComponent } from './videos-list/videos-header/videos-header.component';
import { VideoCardComponent } from './videos-list/video-card/video-card.component';
import { ScrollTrackerDirective } from '@devto/global-components';
@NgModule({
  declarations: [
    VideosComponent,
    VideosHeaderComponent,
    VideoCardComponent,
    ScrollTrackerDirective,
  ],
  imports: [
    LetModule,
    PushModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VideosComponent,
      },
    ]),
  ],
})
export class VideosModule {}
