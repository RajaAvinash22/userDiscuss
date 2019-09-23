import { LoginService } from './../../shared/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ForbiddenNameValidator } from 'src/app/shared/user-name.validator';
import { ILogin } from '../../shared/login';
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
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private _loginService: LoginService, private authService: AuthService) { }

  loginvalue: ILogin[];

  //On Login Button Clicked
  onSubmit() {
    //  console.log(this.loginForm.value);
    this.x = this.loginvalue.filter((data) => (this.loginForm.value.email == data.email && this.loginForm.value.password == data.password
    ))

    if (this.x.length != 0) {

      // for(let y of this.x )
      // {
      //   console.log(y.email);

      // }
      localStorage.setItem("user", JSON.stringify(this.x));
      console.log("Login successful");
      this.router.navigateByUrl('/home');
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
    let t = this.loginForm.get('email');

    return t;
  }
  get password() {
    let t = this.loginForm.get('password');

    return t;
  }
  //login credentials
  login() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]],
      password: ['', [Validators.required, Validators.minLength(6), ForbiddenNameValidator(/password/)]],
    });

    this._loginService.getLoginData()
      .subscribe(data => {
        this.loginvalue = data;
        // console.log(this.loginvalue); 
      });

  }


  ngOnInit() {

    this.login();
  }
}