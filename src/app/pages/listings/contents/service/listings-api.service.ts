import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListingsReponse } from 'src/app/models/listings';


@Injectable({
  providedIn: 'root'
})
export class ListingsApiService {

  constructor(private http:HttpClient) { }

  getListings(): Observable<ListingsReponse>{
    return this.http.get<ListingsReponse>(`https://dev.to/search/listings?category=&listing_search=&page=0&per_page=75&tag_boolean_mode=all`);
  }

  
}

