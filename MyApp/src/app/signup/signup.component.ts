import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service: SignupService) { }

  ngOnInit() {
  }

  onSignUp() {
    console.log(this.service.signUpForm.value);
  }

  passwordCompaired() {
    const password = this.service.signUpForm.value.password;
    const confirmPassword = this.service.signUpForm.value.confirmPassword;

    if (password !== confirmPassword) {
      this.service.signUpForm.value.confirmPassword.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }
}
