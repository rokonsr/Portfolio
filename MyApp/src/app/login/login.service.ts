import { Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

constructor(private auth: AuthService) { }

  loginForm: FormGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
  });

  login() {
    return this.auth.onLogin(this.loginForm.value);
  }

}
