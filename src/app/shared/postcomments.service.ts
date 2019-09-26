import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostcommentsService {
  
  _url ='https://accedo-video-app-api.herokuapp.com/comment/add';
  constructor(private _http: HttpClient) { }

  postComments(userComments){
    // console.log(userComments)
    return this._http.post<any>(this._url, userComments);
  }
}
