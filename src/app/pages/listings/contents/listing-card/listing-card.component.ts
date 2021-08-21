import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listing } from 'src/app/models/listings';


@Component({
  selector: 'app-listing-card',
  templateUrl: './listing-card.component.html',
  styleUrls: ['./listing-card.component.scss'],
})
export class ListingCardComponent implements OnInit {
  @Input() listing!:Listing;
  @Output() selectedTag = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  filterbyTag(tag:string){
    this.selectedTag.emit(tag);
  }

}
