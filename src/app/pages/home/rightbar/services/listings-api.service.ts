import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Listing } from 'src/app/models/listing';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ListingsApiService {

  constructor(private http: HttpClient) { }

  getListing(): Observable<Listing[]> {
    return this.http.get<Listing[]>(`${environment.baseApi}/listings?per_page=10`);
  }
}
