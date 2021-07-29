import { Component, OnInit } from '@angular/core';
import { TagsStore } from '../services/tags.store';

@Component({
  selector: 'app-sidebar-tags',
  templateUrl: './sidebar-tags.component.html',
  styleUrls: ['./sidebar-tags.component.scss'],
})
export class SidebarTagsComponent {
  tags$ = this.tagsStore.tags$;
  constructor(private tagsStore: TagsStore) {}
}
