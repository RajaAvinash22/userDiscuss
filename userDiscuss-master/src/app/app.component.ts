import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  status = false;
  title = 'userDiscuss';
  postDisable = null;
  loginUser;

  isLoggedIn: boolean 

  constructor(private auth: AuthService) {}

  logout() {
    this.postDisable = true;
    this.loginUser = [''];
    localStorage.removeItem('user');
    this.auth.checkLoggedIn(false)
    console.log("Log-out ");
    this.status = true;
    this.auth.setUser(this.loginUser);

  }

  ngOnInit() {

    if(JSON.parse(localStorage.getItem('user'))){
      this.auth.isLoggedIn.next(true)
    }

    this.auth.isLoggedIn.subscribe(
      res=>{
       
        this.isLoggedIn = res
      }
    )
    
  }
}
