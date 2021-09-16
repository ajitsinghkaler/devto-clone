import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '@devto/core/models';
import { environment } from '@devto/environments';

@Injectable({
  providedIn: 'root',
})
export class ArticleApiService {
  constructor(private http: HttpClient) {}

  getArticles(
    params?: Record<string, string | number | boolean>
  ): Observable<Article[]> {
    const newParams = new HttpParams({ fromObject: params }).toString();
    return this.http.get<Article[]>(
      `${environment.baseApi}/articles?${newParams}`
    );
  }
}
