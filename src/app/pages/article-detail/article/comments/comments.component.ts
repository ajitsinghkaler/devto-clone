import { Component, OnInit } from '@angular/core';
import { CommentsStore } from '../services/comments.store';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  comments$ = this.commentStore.comments$;
  constructor(private commentStore: CommentsStore) {}

  ngOnInit(): void {}
}
