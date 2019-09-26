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

    this.auth.checkLoggedIn().subscribe(
      res=>{
        this.isLoggedIn = res
      }
    )
    console.log(this.isLoggedIn)
  }
}
