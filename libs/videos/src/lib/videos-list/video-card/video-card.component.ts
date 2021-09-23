import { Component, Input } from '@angular/core';
import { VideosList } from '@devto/core/models';
@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})
export class VideoCardComponent {
  @Input() video!: VideosList;
}
