import { ShowcommentsService } from './shared/showcomments.service';
import { LoginService } from './shared/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ViewComponent } from './components/view/view.component';
import {  HttpClientModule } from '@angular/common/http';
import { RegisterService } from './shared/register.service';
import { AuthGuard } from './guards/auth.guard'; 
import {TimeAgoPipe} from 'time-ago-pipe';
import { PostcommentsService } from './shared/postcomments.service';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    routingComponents,
    TimeAgoPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [LoginService,RegisterService,AuthGuard,ShowcommentsService,PostcommentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
