import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/articles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleApiService {
  constructor(private http: HttpClient) {}

  getArticles(
    params?: Record<string, string | number | boolean>
  ): Observable<Article[]> {
    const newParams = this.createObjectToParams(params);
    return this.http.get<Article[]>(
      `${environment.baseApi}/articles?${newParams}`
    );
  }

  createObjectToParams(params?: Record<string, string | number | boolean>) {
    let requestParams = new HttpParams({ fromObject: params });
    if(params) requestParams = requestParams.set('top', 3);
    return requestParams.toString();
  }
}
