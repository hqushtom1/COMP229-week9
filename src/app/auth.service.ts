import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem("access_token");
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  setToken(token: any) {
    localStorage.setItem("access_token", token);
  }

  removeToken(token: any) {
    localStorage.removeItem(token);
  }
  login(user: any): Observable<any> {
    // http://localhost:8080/api/login
    return this.http.post<any>("http://localhost:8080/api/login", user);
  }


}
