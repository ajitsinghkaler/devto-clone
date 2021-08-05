import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleDetails } from 'src/app/models/articles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailApiService {
  constructor(private http: HttpClient) {}

  getArticles(username: string, slug: string): Observable<ArticleDetails> {
    return this.http.get<ArticleDetails>(`${environment.baseApi}/articles/${username}/${slug}`);
  }
}
