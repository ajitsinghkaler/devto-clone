import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { tap } from 'rxjs/operators';
import { CommentsStore } from '../services/comments.store';

@Component({
  selector: 'app-comments-tree',
  templateUrl: './comments-tree.component.html',
  styleUrls: ['./comments-tree.component.scss'],
})
export class CommentsTreeComponent {
  @Input() commentsCount = 0;
  comments$ = this.commentStore.comments$;
  constructor(private commentStore: CommentsStore) {}
}
