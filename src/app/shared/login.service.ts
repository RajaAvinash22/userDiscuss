import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url = 'https://accedo-video-app-api.herokuapp.com/users';
  constructor(private _http: HttpClient) { }

  login(userData){
    return this._http.post<any>(this._url, userData);
  }

   getLoginData(): Observable<any[]>{

    return this._http.get<any[]>(this._url);
  
   }
   
}
