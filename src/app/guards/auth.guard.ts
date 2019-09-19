import { Injectable } from '@angular/core';      
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';      
import { Observable } from 'rxjs';      
import { AuthService } from '../shared/auth.service';
@Injectable({      
   providedIn: 'root'      
})      
export class AuthGuard implements CanActivate {  
      
   constructor(private router: Router, private authService : AuthService) {
      
    }      
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean { 
           
      if (localStorage.getItem('user') == "" ) {      
        
         return true; 

      }      
      // navigate to login page as user is not authenticated      
   this.router.navigate(['/login']);      
return false;      
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