import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/auth.service';
@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private router: Router, private authService: AuthService) {

   }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
      let user = JSON.parse(localStorage.getItem('user'));

      if (user) {

         return true;

      } else {
         this.router.navigate(['/login']);
         return false;

      }
      // navigate to login page as user is not authenticated      

   }
   // public isLoggedIn(): boolean {      
   //    let status = false;      
   //    if (localStorage.getItem('isLoggedIn') == "") {      
   //       status = true;      
   //    }    
   //    else {      
   //       status = false;      
   //       }      
   //    return status;      
   //    }    
}