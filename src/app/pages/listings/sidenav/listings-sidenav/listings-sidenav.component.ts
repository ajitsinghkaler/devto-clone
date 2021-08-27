import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { ListingsStore } from '../../contents/service/listings-store';


@Component({
  selector: 'app-listings-sidenav',
  templateUrl: './listings-sidenav.component.html',
  styleUrls: ['./listings-sidenav.component.scss'],
})
export class ListingsSidenavComponent {
  listingTagsSet = this.listingService.listingTagsSet;
  listingTags$ = this.listingService.selectedListingTags$;

  constructor(private listingService:ListingsStore,  private router: Router,
    private activatedRoute: ActivatedRoute){}

  removeTag(tag:string){
    this.listingTagsSet.delete(tag);
    const listingTags = [...this.listingTagsSet].join(',');
    if(listingTags){
      this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParams: { t: listingTags },
      });
    }else{
      this.router.navigate([], {
        relativeTo: this.activatedRoute
      });
    }
  
  }
}
