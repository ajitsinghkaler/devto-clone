import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Listing } from 'src/app/models/listing';
import { ListingsApiService } from './listings-api.service';
interface ListingState {
  listing: Listing[];
}
@Injectable({
  providedIn: 'root'
})
export class ListingsStore extends ComponentStore<ListingState> {

  readonly listing$ = this.select((state) => state.listing);
  readonly setlistings = this.updater(
    (state: ListingState, listing: Listing[]) => ({
      ...state,
      listing: listing,
    })
  );
  readonly getlistings = this.effect(() =>
    this.listingApiS.getListing().pipe(
      tapResponse(
        (listings) => this.setlistings(listings),
        (error) => this.logError(error)
      )
    )
  );
  constructor(private listingApiS: ListingsApiService) {
    super({ listing: [] });
  }

  logError(error: unknown) {
    console.error(error);
  }
}
