import { Component, Input } from '@angular/core';
import { VideosList } from '@devto/core/models';
@Component({
  selector: 'app-video-card',
  template: `<div class="video-collection" id="{{ video.id }}">
    <a class="single-video-article single-article" href="{{ video.path }}">
      <div
        class="video-image"
        [ngStyle]="{
          'background-image': 'url(' + video.cloudinary_video_url + ')'
        }"
      >
        <span class="video-timestamp">{{
          video.video_duration_in_minutes
        }}</span>
      </div>
      <p>
        <strong>{{ video.title }}</strong>
      </p>
      <p class="video-username">{{ video.user.name }}</p>
    </a>
  </div> `,
  styles: [
    `
      .video-collection {
        display: inline;

        .single-video-article {
          border: solid 1px #dbdbdb;
          margin: 5px;
          width: 100%;
          padding-bottom: 8px;
          border-radius: 3px;
          display: inline-block;
          .video-image {
            position: relative;
            padding-top: 56%;
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            background: #0a0a0a no-repeat center center;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
          .video-timestamp {
            position: absolute;
            font-size: 0.7em;
            bottom: 11px;
            right: 4px;
            background-color: rgba(0, 0, 0, 0.8);
            color: #ffffff;
            padding: 2px 5px 3px;
            font-weight: 500;
            border-radius: 3px;
          }

          p {
            margin: 0px;
            padding: 2px 8px;
            max-height: 100%;
            max-width: 90%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            color: #08090a;
            font-size: 0.95em;
          }

          p.video-username {
            color: #64707d;
            font-size: 0.88em;
          }
        }
      }

      @media screen and (min-width: 550px) {
        .video-collection .single-video-article {
          width: 47%;
        }
      }
      @media screen and (min-width: 739px) {
        .video-collection .single-video-article {
          width: 31%;
        }
      }
    `,
  ],
})
export class VideoCardComponent {
  @Input() video!: VideosList;
}
