import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  _url = 'https://accedo-video-app-api.herokuapp.com/signup';
  constructor(private _http: HttpClient) { }

  register(userData){
    event.preventDefault()
    return this._http.post<any>(this._url, userData);
  }
}
