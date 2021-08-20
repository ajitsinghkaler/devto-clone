import { Component, Input, OnInit } from '@angular/core';
import { Listing } from 'src/app/models/listings';

@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss'],
})
export class ListingCardComponent {
  @Input() listing!: Listing;
}
