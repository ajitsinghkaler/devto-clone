import { Component } from '@angular/core';

@Component({
  selector: 'app-listings-header',
  template: `<header class="flex justify-between listing-header">
    <h1 class="listings-main-title">Listings</h1>
    <nav class="flex align-center">
      <div class="flex listings-header-actions">
        <li>
          <a routerLink="/new" class="secondary-button">Create</a>
        </li>
        <li>
          <a routerLink="/dashboard" class="secondary-button">Manage</a>
        </li>
      </div>
    </nav>
  </header> `,
  styles: [
    `
      li {
        list-style: none;
      }
      .listings-main-title {
        font-size: 1.875rem;
        margin: 0;
      }
      .listings-header-actions {
        margin: 0;
        gap: 0.5rem;
      }
    `,
  ],
})
export class ListingsHeaderComponent {}
