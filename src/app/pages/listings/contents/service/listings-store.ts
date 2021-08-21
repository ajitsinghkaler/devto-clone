import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ListingCategory, Listings } from 'src/app/models/listings';
import { ListingsApiService } from './listings-api.service';

interface ListingsState {
  listings: Listings;
}

@Injectable({
  providedIn: 'root',
})
export class ListingsStore extends ComponentStore<ListingsState> {
  selectedTagsMap = new Set();
  readonly listings$: Observable<Listings> = this.select((state) => {
    return state.listings;
  });
  readonly addListings = this.updater((state, listings: Listings) => ({
    listings: [...state.listings, ...listings],
  }));

  readonly loadListings = this.updater((_, listings: Listings) => ({
    listings: [...listings],
  }));

  constructor(private listingsApiS: ListingsApiService) {
    super({ listings: [] });
  }

  getListings = this.effect(
    (allQueryParams$: Observable<[ListingCategory, string | undefined]>) => {
      return allQueryParams$.pipe(
        switchMap(([categoryParam,tags]) => {
          return this.listingsApiS.getListings(categoryParam,tags).pipe(
            tapResponse(
              (listings) => {
                return this.loadListings(listings.result);
              },
              (error) => this.logError(error)
            )
          );
        })
      );
    }
  );

  logError(error: unknown) {
    console.error(error);
  }
}
