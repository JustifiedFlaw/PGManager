import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Schema } from './models/schema';

@Injectable({
  providedIn: 'root'
})
export class SchemaService {
  constructor(
    private http: HttpClient,
    private loginService: LoginService) { }

  url(connectionId: number): string {
    return `${environment.apiUrl}/connections/${connectionId}/schemas`;
  }

  getAll(connectionId: number): Observable<Schema[]> {
    return this.http.get<Schema[]>(this.url(connectionId), this.loginService.getAuthOptions());
  }
}
