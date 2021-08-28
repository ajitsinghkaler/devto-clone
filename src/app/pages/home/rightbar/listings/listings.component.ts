import { Component, OnInit } from '@angular/core';
import { ListingsStore } from '../services/listings.store';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.scss'],
})
export class ListingsComponent {
  listing$ = this.listingStore.listing$;

  constructor(private listingStore: ListingsStore) {}
}
