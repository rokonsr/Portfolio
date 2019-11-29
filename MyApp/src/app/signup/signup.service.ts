import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  matcher = new MyErrorStateMatcher();

  constructor() { }

  signUpForm: FormGroup = new FormGroup({
    username : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),
    confirmPassword : new FormControl('', Validators.required)
  }, { validators: this.checkPasswords });

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : { notSame: true };
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    // const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    // const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    // return (invalidCtrl || invalidParent);

    return control.dirty && form.invalid;
  }
}
