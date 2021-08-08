import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { ListingsStore } from '../service/listings-store';

@Component({
  selector: 'app-listings-content',
  templateUrl: './listings-content.component.html',
  styleUrls: ['./listings-content.component.scss']
})
export class ListingsContentComponent implements OnInit {
  hasPagination = false;
  listingStore$ = this.listingsStore.listings$.pipe(tap(listing=>this.hasPagination = listing?.length === 75));

  constructor(private listingsStore:ListingsStore,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.listingsStore.getListings(this.activatedRoute.params.pipe((map((param)=>param.category))));
  } 

}
