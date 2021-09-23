import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      :host {
        display: block;
        width: 240px;
      }
      a {
        width: 100%;
        padding: 0.5rem;
        display: inline-flex;
        align-items: center;
        color: #202428;
        border-radius: 5px;
        &:hover,
        &:active {
          background-color: rgba(8, 9, 10, 0.05);
          color: #323ebe;
        }
      }

      .sidebar-link-icon {
        margin-right: 0.5rem;
        vertical-align: middle;
        width: 1.5rem;
        height: 1.5rem;
        font-size: 1.25rem;
      }

      .more-link {
        padding-left: 2.5rem;
        font-size: 0.875rem;
        color: #64707d;
      }
    `,
  ],
})
export class SidebarComponent {}
