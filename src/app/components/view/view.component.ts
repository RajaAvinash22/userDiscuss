import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit , OnDestroy{
 public img ="./assets/images/images.png";
 loginUser:any;

  constructor(private router: Router) { }

  // logout(){
  //   sessionStorage.removeItem('user');
  //   // this.router.navigate(['/login']);

  // }
  
  ngOnInit() {
    this.loginUser = JSON.parse(localStorage.getItem('user'));  
    
    for(let x of this.loginUser)
    {
      this.loginUser = x;
    }
  }

  ngOnDestroy()
  {
    this.loginUser = null ;
  }

}
