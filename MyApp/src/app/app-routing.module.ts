import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ValuesComponent } from './values/values.component';
import { AuthGuard } from './_shared/guards/auth.guard';


const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'login', component : LoginComponent },
  { path : 'signup', component : SignupComponent },
  {
    path : '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path : 'value', component : ValuesComponent, canActivate: [AuthGuard] }
    ]
  },
  { path : '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
