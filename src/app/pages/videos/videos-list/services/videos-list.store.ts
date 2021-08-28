import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { VideosList } from '../../../../models/videosList';
import { VideoslistApiService } from './videoslist-api.service';

interface VideosListState {
    VideosList: VideosList[];
}

@Injectable({
  providedIn: 'root',
})
export class VideosListStore extends ComponentStore<VideosListState> {
  readonly VideosList$ = this.select((state) => state.VideosList);
  readonly setVideoslist = this.updater(
    (state: VideosListState, VideosList: VideosList[]) => ({
      ...state,
      VideosList:  [...state.VideosList,...VideosList],
    })
  );
 
  readonly getVideoslist = this.effect(
    (params: Observable<Record<string, string>>) =>
      params.pipe(
        switchMap((params) =>
          this.VideoslistApiS.getVideoslist(params).pipe(
            tapResponse(
                (VideosList) => this.setVideoslist(VideosList),
                (error) => this.logError(error)
            )
          )
        )
      )
  );
  constructor(private VideoslistApiS: VideoslistApiService) {
    super({ VideosList: [] });
  }

  logError(error: unknown) {
    console.error(error);
  }
}
