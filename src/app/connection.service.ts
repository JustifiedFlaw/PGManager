import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Connection } from './models/connection';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  url = environment.apiUrl + '/connections';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  getAll(): Observable<Connection[]> {
    return this.http.get<Connection[]>(this.url, this.loginService.getAuthOptions());
  }

  get(id: number): Observable<Connection> {
    return this.http.get<Connection>(this.url + '/' + id, this.loginService.getAuthOptions());
  }

  update(connection: Connection): Observable<Object> {
    return this.http.put(this.url, connection, this.loginService.getAuthOptions());
  }

  add(connection: Connection): Observable<Object> {
    return this.http.post(this.url, connection, this.loginService.getAuthOptions());
  }

  delete(id: number): Observable<Object> {
    return this.http.delete(this.url + '/' + id, this.loginService.getAuthOptions());
  }
}
