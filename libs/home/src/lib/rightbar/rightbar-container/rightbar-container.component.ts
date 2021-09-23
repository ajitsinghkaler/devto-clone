import { Component } from '@angular/core';
import { HOME_RIGHTBAR_TAGS } from '@devto/global-constants';
@Component({
  selector: 'app-rightbar-container',
  template: `<aside>
    <app-listings></app-listings>
    <app-tag-article
      *ngFor="let asideTag of asideTags"
      [tag]="asideTag"
    ></app-tag-article>
  </aside> `,
  styles: [
    `
      aside {
        display: grid;
        grid-row-gap: 1rem;
      }
      :host {
        display: block;
      }
    `,
  ],
})
export class RightbarContainerComponent {
  asideTags = HOME_RIGHTBAR_TAGS;
}
