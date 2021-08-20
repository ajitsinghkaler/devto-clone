import { Component, OnInit ,Input} from '@angular/core';
import { VideosList } from 'src/app/models/videosList';
@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {
  @Input() video!: VideosList;
  constructor() { }

  ngOnInit(): void {
  }

}
