import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Database } from './models/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  constructor(
    private http: HttpClient,
    private loginService: LoginService) { }

  url(connectionId: number): string {
    return `${environment.apiUrl}/connections/${connectionId}/databases`;
  }

  getAll(connectionId: number): Observable<Database[]> {
    return this.http.get<Database[]>(this.url(connectionId), this.loginService.getAuthOptions());
  }

  add(connectionId: number, database: Database): Observable<Object> {
    return this.http.post(this.url(connectionId), database, this.loginService.getAuthOptions());
  }
}
