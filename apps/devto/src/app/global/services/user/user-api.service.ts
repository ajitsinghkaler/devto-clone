import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetails } from '@devto/core/models';
import { environment } from '@devto/environments';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}

  getUser(username?: string): Observable<UserDetails> {
    return this.http.get<UserDetails>(
      `${environment.baseApi}/users/by_username?url=${username}`
    );
  }
}
