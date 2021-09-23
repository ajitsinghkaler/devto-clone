import { Component } from '@angular/core';

@Component({
  selector: 'app-videos-header',
  template: `<header class="video-page-title">
    <h1>DEV Community on Video</h1>
  </header> `,
  styles: [
    `
      .video-page-title {
        font-size: calc(0.9vw + 10px);
        text-align: center;
      }
    `,
  ],
})
export class VideosHeaderComponent {}
