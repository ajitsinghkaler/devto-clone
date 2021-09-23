import { Component, Input, OnInit } from '@angular/core';
import { Reaction } from '@devto/core/models';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styles: [
    `
      :host {
        display: grid;
        gap: 1.5rem;
        justify-content: stretch;
        z-index: 1;
        position: sticky;
        top: calc(var(--header-height) + 1rem + 6vh);
      }
      .article-reactions-inner {
        display: grid;
        gap: 1.5rem;
        justify-content: stretch;
        button {
          padding: unset;
        }
      }

      button {
        display: inherit;
        line-height: 0.8;
      }

      .article-reaction-icon {
        color: #363d44;
        padding: 0.5rem;
        transition: all cubic-bezier(0.17, 0.67, 0.5, 0.71);
        border-radius: 50%;
      }

      .article-reaction-number {
        line-height: 1.5;
        color: #4d5760;
        font-size: 0.875rem;
      }
      .show-more-button {
        margin: auto;
        color: #64707d;
      }

      svg path {
        fill: currentColor;
      }
    `,
  ],
})
export class ReactionsComponent {
  @Input() reactions: Reaction[] = [];
}
