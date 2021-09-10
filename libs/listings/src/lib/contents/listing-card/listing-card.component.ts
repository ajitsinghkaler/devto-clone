import { Component, Input } from '@angular/core';
import { AuthorListing } from '@devto/core/models';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss'],
})
export class ListingCardComponent {
  @Input() listing!: AuthorListing;

}
