import { Injectable } from '@angular/core';
import { ILogin } from './login';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
x;
y;

isLoggedIn = new BehaviorSubject(false)

  constructor() { }

  checkLoggedIn(){
    if(JSON.parse(localStorage.getItem('user'))) {
       this.isLoggedIn.next(true)
       return this.isLoggedIn
    }
  }





//   getUser(){
//   this.x=localStorage.getItem('email');
//   this.y= localStorage.getItem('password');
//   return [this.x,this.y]
// }



}
