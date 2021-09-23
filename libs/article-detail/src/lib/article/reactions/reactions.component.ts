import { Component, Input, OnInit } from '@angular/core';
import { Reaction } from '@devto/core/models';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
})
export class ReactionsComponent {
  @Input() reactions: Reaction[] = [];
}
