import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-social-links',
  templateUrl: './sidebar-social-links.component.html',
  styles: [
    `
      :host {
        padding: 1rem;
        margin-top: 1rem;
        display: block;
      }
      .social-link-icon {
        margin: 0 0.5rem;
        color: #64707d;
        svg,
        svg path {
          fill: currentColor;
        }
      }
    `,
  ],
})
export class SidebarSocialLinksComponent {}
