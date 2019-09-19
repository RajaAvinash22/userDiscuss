
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
export class SignUpComponent implements OnInit 
{

 register: FormGroup;

  // loadApiData() {
  //   this.register.patchValue({
  //     username: 'KevinBruce',
  //     password: 'test123',

  //   });
  // }
  constructor ( private router: Router, private fb: FormBuilder, private _registerService: RegisterService) { }

  onSubmit()
  {
    console.log(this.register.value);
    this._registerService.register(this.register.value)
    .subscribe(
      response => {
          if(response.error)
          { 
            console.log('Error!',response.error);
            
            this.router.navigate(['/sign-up'])
          } else
          {
            console.log('Success!', response.success );
            this.router.navigate(['/home']);
          } 
       
        },
    );

    localStorage.setItem("email",this.register.value.email);
    localStorage.setItem("password",this.register.value.password);
  }
  

  get lastname() {
    let t = this.register.get('lastname');
    
    return t;
  }
  get firstname() {
    let t = this.register.get('firstname');
    
    return t;
  }
  get password() {
    let t = this.register.get('password');
    
    return t;
  }
  get email() {
    let t = this.register.get('email');
    
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
    let t = this.register.reset();
    return t;
  }

  ngOnInit() {
    this.register = this.fb.group({
      username: ['',],
      password: ['',[Validators.required, Validators.minLength(6), ForbiddenNameValidator(/password/)]],
      email: ['',[Validators.required,
               Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
             ]],
      // subscribe: [false],
      // fullName: this.fb.group({
        firstname: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
        lastname: ['',[Validators.required, Validators.minLength(6),Validators.maxLength(12)]],
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

}
