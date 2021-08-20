import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideosList } from '../../../../models/videosList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VideoslistApiService {
  constructor(private http: HttpClient) {}

  getVideoslist(params?: Record<string, string>): Observable<VideosList[]> {
    const newParams = new HttpParams({ fromObject: params }).toString();
    return this.http.get<VideosList[]>(
      `${environment.baseApi}/videos?${newParams}`
    );
  }
}
