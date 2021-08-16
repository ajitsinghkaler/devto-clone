import { Component, Input, OnInit } from '@angular/core';

import { VideosListStore } from '../services/videos-list.store';
@Component({
  selector: 'app-videos-list-container',
  templateUrl: './videos-list-container.component.html',
  styleUrls: ['./videos-list-container.component.scss']
})
export class VideosListContainerComponent implements OnInit {
  
  page: string = '0';
  videosList$ = this.VideosListStore.VideosList$;

  constructor(private VideosListStore: VideosListStore) {}

  ngOnInit(): void {
    this.VideosListStore.getVideoslist({ page: this.page, signature:'4072170' });
    console.log(this.videosList$)
  }
  
   onScrollingFinished(){
    console.log('scroll');
    this.page = (Number(this.page)+1).toString()
    this.VideosListStore.getVideoslist({ page: this.page, signature:'4072170' });
  }

}
