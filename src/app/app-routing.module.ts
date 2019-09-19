import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }  from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ViewComponent } from './components/view/view.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent 
    
  },
    {
      path:'sign-up' , component: SignUpComponent 
  
    },
    {
      path:'' , component: ViewComponent 
  
    },
    {
      path:'home' , component: ViewComponent ,canActivate : [AuthGuard]
  
    },
    {
      path:'**' , component: ViewComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,SignUpComponent,ViewComponent]
