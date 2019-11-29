import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: AuthService, private route: Router) {}

  canActivate(): boolean {
    if (this.service.loggedIn()) {
      return true;
    } else {
      this.route.navigateByUrl('home');
      return false;
    }
  }
}
