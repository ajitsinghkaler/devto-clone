import { Component, Input } from '@angular/core';
import { CommentsStore } from '../services/comments.store';

@Component({
  selector: 'app-comments-tree',
  template: `<header class="flex justify-between">
      <h2>
        Discussion <span>({{ commentsCount }})</span>
      </h2>
      <button class="subscribe-btn btn" type="button">Subscribe</button>
    </header>
    <div *rxLet="comments$; let comments" class="comments">
      <app-comments [comments]="comments"></app-comments>
    </div> `,
  styles: [
    `
      :host {
        display: block;
        app-comments {
          padding-left: 1.75rem;
        }
      }
    `,
  ],
})
export class CommentsTreeComponent {
  @Input() commentsCount = 0;
  comments$ = this.commentStore.comments$;
  constructor(private commentStore: CommentsStore) {}
}
