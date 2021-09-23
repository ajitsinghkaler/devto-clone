import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ListingsStore } from '../service/listings-store';

@Component({
  selector: 'app-listings-content',
  template: `<div class="listing-container">
    <div class="listings-cards" appMasonary>
      <app-listing-card
        *ngFor="let listing of listingStore$ | push"
        [attr.id]="listing.id"
        [listing]="listing"
      ></app-listing-card>
    </div>
    <div class="flex justify-center" *ngIf="hasPagination">
      <button class="secondary-button">Load More...</button>
    </div>
  </div> `,
  styles: [
    `
      .listing-container {
        font-size: 16px;
      }
      .listings-cards {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
        margin-bottom: 1.5rem;
      }
    `,
  ],
})
export class ListingsContentComponent implements OnInit {
  hasPagination = false;
  listingStore$ = this.listingsStore.listings$.pipe(
    tap((listing) => (this.hasPagination = listing?.length === 75))
  );

  constructor(
    private listingsStore: ListingsStore,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listingsStore.getListings(
      this.activatedRoute.params.pipe(map((param) => param.category))
    );
  }
}
