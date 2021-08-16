import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VideosList } from '../../../../models/videosList';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VideoslistApiService {

    constructor(private http: HttpClient) {}
  
    getVideoslist(
      params?: Record<string, string>
    ): Observable<VideosList[]> {
      const newParams = this.createObjectToParams(params);
      return this.http.get<VideosList[]>(
        `${environment.baseApi}/videos?${newParams}`
      );
    }
  
    createObjectToParams(params?: Record<string, string>) {
      let requestParams = new HttpParams();
      if(params){
         requestParams = requestParams.set('page', params.page);
         requestParams = requestParams.set('signature', params.signature);
      }
      return requestParams.toString();
    }
  }
  
