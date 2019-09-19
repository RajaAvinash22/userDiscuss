import { LoginService } from './shared/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { ViewComponent } from './components/view/view.component';
import { CommentsComponent } from './components/comments/comments.component';
import {  HttpClientModule } from '@angular/common/http';
import { RegisterService } from './shared/register.service';
import { AuthGuard } from './guards/auth.guard'; 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewComponent,
    CommentsComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [LoginService,RegisterService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
