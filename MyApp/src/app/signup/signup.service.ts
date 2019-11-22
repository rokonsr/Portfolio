import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

constructor() { }

signUpForm: FormGroup = new FormGroup({
  username : new FormControl('', Validators.required),
  password : new FormControl('', Validators.required),
  confirmPassword : new FormControl('', Validators.required)
});

}
