import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsStore } from '../service/listings-store';

@Component({
  selector: 'app-listings-content',
  templateUrl: './listings-content.component.html',
  styleUrls: ['./listings-content.component.scss']
})
export class ListingsContentComponent implements OnInit {
  listingStore$ = this.listingsStore.listings$;

  constructor(private listingsStore:ListingsStore) { }

  ngOnInit(): void {

  }

}
