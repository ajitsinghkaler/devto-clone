import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsApiService {
  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(
      `${environment.baseApi}/comments?a_id=${id}`
    );
  }
}
