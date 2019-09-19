import { LoginService } from './../../shared/login.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ForbiddenNameValidator } from 'src/app/shared/user-name.validator';
import {ILogin} from '../../shared/login';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
x;
  login: FormGroup;
  constructor ( private router: Router, private fb: FormBuilder, private _loginService: LoginService, private authService : AuthService) { }

 loginvalue:ILogin[];

  onSubmit()
  {
    console.log(this.login.value);
   this.x = this.loginvalue.filter((data) =>( this.login.value.email == data.email && this.login.value.password == data.password
   ))

   if(this.x.length != 0){

    // for(let y of this.x )
    // {
    //   console.log(y.email);
       
    // }
   localStorage.setItem("user", JSON.stringify(this.x));
    console.log(this.x);
   }

    // localStorage.setItem("email",x);
    // localStorage.setItem("password","y");

    
    // this._loginService.login(this.login.value)
    // .subscribe(
    //   response => console.log('Success!', response.success.username),
    //   error => console.error('Error!', error)
    // );
  }
  

  get email() {
    let t = this.login.get('email');
    
    return t;
  }
  get password() {
    let t = this.login.get('password');
    
    return t;
  }

  ngOnInit() {
    this.login = this.fb.group({
      email: ['',[Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]],
      password: ['',[Validators.required, Validators.minLength(6), ForbiddenNameValidator(/password/)]],
  });

    this._loginService.getLoginData()
     .subscribe(data =>{ this.loginvalue = data; console.log(this.loginvalue);});
   
}

}
