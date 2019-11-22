import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'https://localhost:44308/api/auth/';

constructor(private http: HttpClient) { }

  onLogin(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(map((result: any) => {
      if (result) {
        localStorage.setItem('token', result.token);
        localStorage.setItem('username', result.username);
      }
    }));
  }

}
