import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'userDiscuss';

  isLoggedIn: boolean 

  constructor(private auth: AuthService) {}

  ngOnInit() {

    if(JSON.parse(localStorage.getItem('user'))){
      this.auth.isLoggedIn.next(true)
    }

    this.auth.isLoggedIn.subscribe(
      res=>{
       
        this.isLoggedIn = res
      }
    )
    console.log(this.isLoggedIn)
  }
}
