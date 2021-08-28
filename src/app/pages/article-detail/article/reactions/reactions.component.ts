import { Component, Input, OnInit } from '@angular/core';
import { Reaction } from 'src/app/models/reaction-data';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.scss'],
})
export class ReactionsComponent {
  @Input() reactions: Reaction[] = [];
}
