import { Component } from '@angular/core';
import { ListingsStore } from '../services/listings.store';

@Component({
  selector: 'app-listings',
  template: `<section>
    <header class="flex justify-between align-center">
      <h3>Listings</h3>
      <div>
        <a routerLink="/listings" class="see-all-link">See all</a>
      </div>
    </header>

    <div *rxLet="listing$; let listings; let err = $error">
      <a
        *ngFor="let listing of listings"
        class="listing-item"
        routerLink="/listings/forhire/react-js-195j"
      >
        <div>{{ listing.title }}</div>
        <div class="listing-type">{{ listing.category }}</div>
      </a>
      <a class="create-listing w-100" routerLink="/listings/new"
        >Create a Listing</a
      >
    </div>
    <ng-template #suspense>loading</ng-template>
    <ng-template #error>loading</ng-template>
  </section> `,
  styles: [
    `
      header {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid #eef0f1;
        h3 {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .see-all-link {
          font-weight: 500;
          font-size: 0.875rem;
          color: #3b49df;
        }
      }

      .listing-item {
        display: block;
        padding: 1rem;
        border-bottom: 1px solid #eef0f1;
        color: #202428;
      }

      .listing-type {
        color: #64707d;
        font-size: 0.875rem;
        padding-top: 0.25rem;
      }

      .create-listing {
        font-weight: 500;
        padding: 0.75rem;
        font-size: 0.875rem;
        text-align: center;
        color: #202428;
        display: block;
      }

      :host {
        background-color: #f9fafa;
        color: #202428;
        box-shadow: 0 0 0 1px rgba(8, 9, 10, 0.05);
        display: block;
        border-radius: 5px;
      }
    `,
  ],
})
export class ListingsComponent {
  listing$ = this.listingStore.listing$;
  constructor(private listingStore: ListingsStore) {}
}
