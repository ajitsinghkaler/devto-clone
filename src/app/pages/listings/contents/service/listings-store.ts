import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Observable } from 'rxjs';
import { Listings } from 'src/app/models/Listings';
import { ListingsApiService } from './listings-api.service';

interface ListingsState {
  listings: Listings;
}

@Injectable({
  providedIn: 'root',
})
export class ListingsStore extends ComponentStore<ListingsState> {
  readonly listings$: Observable<Listings> = this.select(
    (state) => {
      console.log(state,'state');
      return state.listings
    }
  );
  readonly addListings = this.updater((state, listings: Listings) => ({
    listings: [...state.listings, ...listings],
  }));

  constructor(private listingsApiS: ListingsApiService) {
    super({ listings: [] });
  }

  readonly getArticles = this.effect(() =>
    this.listingsApiS.getListings().pipe(
      tapResponse(
        (listings) => {
          console.log(listings);
          return this.addListings(listings.result);
        },
        (error) => this.logError(error)
      )
    )
  );

  logError(error: unknown) {
    console.error(error);
  }
}
