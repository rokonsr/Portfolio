import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ValuesComponent } from './values/values.component';


const routes: Routes = [
  { path : 'home', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'signup', component : SignupComponent },
  { path : 'value', component : ValuesComponent },
  { path : '**', component : AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
