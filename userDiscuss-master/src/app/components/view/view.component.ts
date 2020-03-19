import { ShowcommentsService } from './../../shared/showcomments.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IShowComments } from 'src/app/shared/showcomments';
import { PostcommentsService } from 'src/app/shared/postcomments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { identifierModuleUrl, collectExternalReferences } from '@angular/compiler';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  isLoggedIn: boolean
  public img = "./assets/images/images.png";
  loginUser: any;
  clicked = false;
  postcomment;
  totalComment = null;
  commentsvalue: IShowComments[];
  myComment: string = '';
  postDisable = null;


  constructor(private router: Router,
    private _showcommentsService: ShowcommentsService,
    private _postcommentsService: PostcommentsService,
    private auth: AuthService,
  ) {}

  //getter of comments function
  showData() {
    this._showcommentsService.showComments()
      .subscribe(data => {
        this.commentsvalue = data.reverse();
        this.totalComment = this.commentsvalue.length;
        // console.log(this.commentsvalue);

      });

  }


  // log-out function
  // logout() {
  //   this.postDisable = true;
  //   this.loginUser = "";
  //   localStorage.removeItem('user');
  //   this.auth.checkLoggedIn(false)
  //   console.log("Log-out ");

  //   this.loginUser = true;
  // }


  //posting of comments from login user
  post() {
    //  let x = JSON.parse(localStorage.getItem('user'));
    // console.log(x.email);
    this.postcomment = {
      email: JSON.parse(localStorage.getItem('user'))[0].email,
      discussion_id: 123,
      description: this.myComment
    }
    this._postcommentsService.postComments(this.postcomment)
      .subscribe(
        data => {
          this.postcomment = data;
          //  console.log(this.postcomment);

          this.showData();
        },
        response => {
          if (response.success) {
            console.log('Success!');
          }
          else {
            console.log('Error!', response.error);
          }

        },
      );
  }

  ngOnInit() {

    this.auth.isLoggedIn.subscribe(
      res => {

        this.isLoggedIn = res;
      

      }
     
    )
    this.auth.isLoggedout.subscribe(
      (res) => { this.loginUser = res}
    )




    let z = JSON.parse(localStorage.getItem('user'));
    console.log(z);
    if (z) {
      if (z.length !== 0) {
        this.loginUser = z;


      }
    }
    // this.loginUser = x;
    // //console.log(this.loginUser);

    // for (let y of this.loginUser) {
    //   this.loginUser = y;
    // }



    this.showData();

  }

 
}
