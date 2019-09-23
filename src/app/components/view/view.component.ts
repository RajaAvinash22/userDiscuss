import { ShowcommentsService } from './../../shared/showcomments.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IShowComments } from 'src/app/shared/showcomments';
import { PostcommentsService } from 'src/app/shared/postcomments.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit 
{

      public img ="./assets/images/images.png";
      loginUser: any;
      clicked = false;
      postcomment;
      commentsvalue: IShowComments[];
      myComment: string = '';
      postDisable=null;

  constructor(private router: Router, private _showcommentsService:ShowcommentsService, private _postcommentsService: PostcommentsService) { }

  //getter of comments function
  showData(){
    this._showcommentsService.showComments()
    .subscribe(data=>{this.commentsvalue = data; 
      // console.log(this.commentsvalue);
    });
  
  }
//log-out function
   logout()
   {
    this.postDisable=true;
    this.loginUser = "" ;
     localStorage.removeItem('user');
     console.log("Log-out ");
   }
   
  
   //posting of comments from login user
   post()
   {
  let x= JSON.parse(localStorage.getItem('user'));
  // console.log(x);
     this.postcomment = {
       email: JSON.parse(localStorage.getItem('user'))[0].email,
       discussion_id: 123,
       description:this.myComment
     }
     this._postcommentsService.postComments(this.postcomment)
     .subscribe(
       data =>{
         this.postcomment=data;
        //  console.log(this.postcomment);

       this.showData();
       },
      response =>{
        if(response.success)
        {
          console.log('Success!', this.postcomment);
        }
        else
        {
          console.log('Error!',response.error);
        }

      },
     );
   }
  
  ngOnInit() {
    let x = [];
    x.push(JSON.parse(localStorage.getItem('user')));
    this.loginUser = x;
    
    for(let x of this.loginUser)
    {
      this.loginUser = x;
    }

    // this._showcommentsService.showComments()
    // .subscribe(data=>{this.commentsvalue = data; console.log(this.commentsvalue);});

 this.showData();

   }
}
