import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../../shared/register.service';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { ForbiddenNameValidator } from 'src/app/shared/user-name.validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  x = [];
  registerForm: FormGroup;

  // loadApiData() {
  //   this.register.patchValue({
  //     username: 'KevinBruce',
  //     password: 'test123',

  //   });
  // }
  constructor(private router: Router, private fb: FormBuilder, private _registerService: RegisterService) { }

  onSubmit() {
    //  console.log(this.registerForm.value);
    this._registerService.register(this.registerForm.value)
      .subscribe(
        response => {
          if (response.success) {
            console.log('Success!');
            this.router.navigate(['/home'])

          } else {
            console.log('Error!', response.error);
            this.router.navigate(['/sign-up'])
          }

        },
      );


      let x = [];
       x.push(this.registerForm.value);
       
    localStorage.setItem("user", JSON.stringify(x));

    // localStorage.setItem("email",this.registerForm.value.email);
    // localStorage.setItem("password",this.registerForm.value.password);
  }


  get lastname() {
    let t = this.registerForm.get('lastname');

    return t;
  }
  get firstname() {
    let t = this.registerForm.get('firstname');

    return t;
  }
  get password() {
    let t = this.registerForm.get('password');

    return t;
  }
  get email() {
    let t = this.registerForm.get('email');

    return t;
  }
  // get alternateEmails() {
  //   let t = this.register.get('alternateEmails') as FormArray;

  //   return t;
  // }
  //  addAlternateEmail()
  //  {
  //   let t = this.alternateEmails.push(this.fb.control(''));
  //   return t;
  //  }
  reset() {
    let t = this.registerForm.reset();
    return t;
  }

  signup() {
    this.registerForm = this.fb.group({
      username: ['',],
      password: ['', [Validators.required, Validators.minLength(6), ForbiddenNameValidator(/password/)]],
      email: ['', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]],
      // subscribe: [false],
      // fullName: this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      // }),
      // alternateEmails: this.fb.array([])
    });
    // this.register.get('subscribe').valueChanges
    // .subscribe(checkedValue =>{
    //   const email = this.register.get('email');
    //   if (checkedValue)
    //   {
    //     email.setValidators(Validators.compose([
    //       Validators.required,
    //       Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    //     ]));ForbiddenNameValidator(/password/)]
    //   }else
    //   {
    //      email.clearValidators();
    //   }
    //   email.updateValueAndValidity();
    // })
  }

  ngOnInit() {

    this.signup();
  }

}
