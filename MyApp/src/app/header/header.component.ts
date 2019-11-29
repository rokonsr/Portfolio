import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignUp() {
    this.router.navigateByUrl('signup');
  }

  onLogin() {
    this.router.navigateByUrl('login');
  }

  loggedIn() {
    return this.service.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn();
    this.router.navigateByUrl('login');
  }
}
