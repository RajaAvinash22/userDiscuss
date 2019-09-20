import { ShowcommentsService } from './../../shared/showcomments.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IShowComments } from 'src/app/shared/showcomments';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit , OnDestroy
{

      public img ="./assets/images/images.png";
      loginUser: any;
      clicked = false;
      commentsvalue: IShowComments[];

  constructor(private router: Router, private _showcommentsService:ShowcommentsService) { }

   logout(){
    this.loginUser = "" ;
     localStorage.removeItem('user');
     console.log("Log-out ");

        // this.loginUser = null ;
  //   // this.router.navigate(['/login']);

   }
  
  ngOnInit() {
    this.loginUser = JSON.parse(localStorage.getItem('user'));  
    
    for(let x of this.loginUser)
    {
      this.loginUser = x;
    }

    this._showcommentsService.showComments()
    .subscribe(data=>{this.commentsvalue = data; console.log(this.commentsvalue);});
  }

  ngOnDestroy()
  {
    this.loginUser = null ;
  }

}
