import {
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Comment } from 'src/app/models/comment';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent{
  @Input() comments: Comment[] = [];
  constructor(public cdRef:ChangeDetectorRef) {}
}
