import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowcommentsService {
  _url ="https://accedo-video-app-api.herokuapp.com/comments/123";
  constructor(private _http: HttpClient) { }

  showComments():Observable<any[]>
  {
    return this._http.get<any[]>(this._url);
  }
}
