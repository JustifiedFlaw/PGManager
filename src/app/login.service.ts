import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Login } from './models/login';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url = environment.apiUrl + "auth";
  storageName = "login";

  constructor(private http: HttpClient) { }

  isLoggedIn(): boolean {
    const saved = localStorage.getItem(this.storageName);
    return saved != null && saved != undefined;
  }

  login(user: Login): Observable<boolean> {
    return this.http.get<boolean>(this.url, this.getAuthOptions(user)).pipe(
      tap(result => {
        if (result) {
          localStorage.setItem(this.storageName, JSON.stringify(user));
        }
      }),
      catchError(err => of(false))
    );
  }

  logout() {
    localStorage.removeItem(this.storageName);
  }

  getCurrentLogin(): Login | null {
    const loginJson = localStorage.getItem(this.storageName);
    if (loginJson) {
      return JSON.parse(loginJson) as Login;
    }

    return null;
  }

  getAuthOptions(login?: Login): { headers: HttpHeaders } {
    const l = login ?? this.getCurrentLogin();
    if  (l) {
      return {
        headers: new HttpHeaders(
          { 
            'Content-Type': 'application/json',
            'Authorization': 'Basic ' + window.btoa(l.username + ':' + l.password)
          },)
        };
    }

    throw new Error("User not logged in");
  }
}
