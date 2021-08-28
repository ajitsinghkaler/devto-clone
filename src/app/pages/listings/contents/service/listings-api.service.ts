import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingCategory, ListingsReponse } from 'src/app/models/listings';


@Injectable({
  providedIn: 'root'
})
export class ListingsApiService {

  constructor(private http:HttpClient) { }

  getListings(category?:ListingCategory): Observable<ListingsReponse>{
    const categoryParam = new HttpParams().set('category', category || '').toString();
    return this.http.get<ListingsReponse>(`https://dev.to/search/listings?${categoryParam}&listing_search=&page=0&per_page=75&tag_boolean_mode=all`);
  }

  
}

