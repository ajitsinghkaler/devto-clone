import { Component, OnInit } from '@angular/core';
import { VideosListStore } from './videos-list/services/videos-list.store';

@Component({
  selector: 'app-videos',
  template: `<app-videos-header></app-videos-header>
    <div scrollTracker (scrollingFinished)="onScrollingFinished()">
      <ng-container *ngFor="let videos of videosList$ | push">
        <app-video-card [video]="videos"></app-video-card>
      </ng-container>
    </div> `,
})
export class VideosComponent implements OnInit {
  page = '0';
  videosList$ = this.VideosListStore.VideosList$;

  constructor(private VideosListStore: VideosListStore) {}

  ngOnInit(): void {
    this.VideosListStore.getVideoslist({
      page: this.page,
      signature: '4072170',
    });
    console.log(this.videosList$);
  }

  onScrollingFinished() {
    this.page = (Number(this.page) + 1).toString();
    this.VideosListStore.getVideoslist({
      page: this.page,
      signature: '4072170',
    });
  }
}
