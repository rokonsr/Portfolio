import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public service: LoginService, private route: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if (this.service.loginForm.valid) {
      this.service.login().subscribe(result => {
        this.route.navigateByUrl('home');
      }, error => {
        console.log('Login failed');
      });
    }
  }
}
