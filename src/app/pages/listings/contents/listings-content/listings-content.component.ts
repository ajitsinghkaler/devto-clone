import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
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


  constructor(private listingsStore:ListingsStore,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const combineAllParams$ = combineLatest([this.activatedRoute.params.pipe((map((param)=>param.category))),this.activatedRoute.queryParams.pipe(
      map((query)=>query?.t)
    )]).pipe(tap(console.log));
    this.listingsStore.getListings(combineAllParams$);
  } 

  onFilterByTag(tag:string):void{
    this.listingsStore.selectedTagsMap.add(tag);
    const queryParams = [...this.listingsStore.selectedTagsMap].join(',');
    this.router.navigate([], { relativeTo:this.activatedRoute,queryParams: { t:queryParams} });
  }
}
