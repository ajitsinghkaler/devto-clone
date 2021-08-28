import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/models/tags';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagsApiService {

  constructor(private http: HttpClient) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.baseApi}/tags`);
  }
}
