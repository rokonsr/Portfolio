import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:44308/api/auth/';
  jwtHelper = new JwtHelperService();
  tokenDetail: any;

constructor(private http: HttpClient) { }

  onLogin(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(map((result: any) => {
      if (result) {
        localStorage.setItem('token', result.token);
        this.tokenDetail = this.jwtHelper.decodeToken(result.token);
        console.log(this.tokenDetail);
      }
    }));
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
