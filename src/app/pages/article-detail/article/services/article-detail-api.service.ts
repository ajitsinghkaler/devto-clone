import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleDetails } from 'src/app/models/articles';
import { Reaction, ReactionData } from 'src/app/models/reaction-data';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ArticleDetailApiService {
  constructor(private http: HttpClient) {}

  getArticle(username: string, slug: string): Observable<ArticleDetails> {
    return this.http.get<ArticleDetails>(
      `${environment.baseApi}/articles/${username}/${slug}`
    );
  }

  getArticleReactions(id: number): Observable<Reaction[]> {
    return this.http
      .get<ReactionData>(`${environment.base}/reactions?article_id=${id}`)
      .pipe(map((reaction) => reaction.article_reaction_counts));
  }
}
