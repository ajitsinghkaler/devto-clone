import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listings } from 'src/app/models/Listings';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ListingsApiService {

  constructor(private http:HttpClient) { }

  getListings(): Observable<{result:Listings}>{
    return this.http.get<{result:Listings}>(`https://dev.to/search/listings?category=&listing_search=&page=0&per_page=75&tag_boolean_mode=all`);
  }

  
}

