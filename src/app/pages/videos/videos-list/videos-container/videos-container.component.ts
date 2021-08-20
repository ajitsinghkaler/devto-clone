import { Component, OnInit } from '@angular/core';
import { VideosListStore } from '../services/videos-list.store';

@Component({
  selector: 'app-videos-container',
  templateUrl: './videos-container.component.html',
  styleUrls: ['./videos-container.component.scss']
})
export class VideosContainerComponent implements OnInit {

  page: string = '0';
  videosList$ = this.VideosListStore.VideosList$;

  constructor(private VideosListStore: VideosListStore) {}

  ngOnInit(): void {
    this.VideosListStore.getVideoslist({ page: this.page, signature:'4072170' });
    console.log(this.videosList$)
  }
  
   onScrollingFinished(){
    this.page = (Number(this.page)+1).toString()
    this.VideosListStore.getVideoslist({ page: this.page, signature:'4072170' });
  }

}
