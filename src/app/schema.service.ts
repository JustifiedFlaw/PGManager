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

  url(connectionId: number, schema?: string): string {
    let url = `${environment.apiUrl}/connections/${connectionId}/schemas`;
    if (schema) {
      url += `/${schema}`;
    }

    return url;
  }

  getAll(connectionId: number): Observable<Schema[]> {
    return this.http.get<Schema[]>(this.url(connectionId), this.loginService.getAuthOptions());
  }
  
  add(connectionId: number, schema: string): Observable<Object> {
    return this.http.post(this.url(connectionId, schema), null, this.loginService.getAuthOptions());
  }

  rename(connectionId: number, schema: string, newName: string): Observable<Object> {
    return this.http.put(this.url(connectionId, schema) + '?newName=' + newName, null, this.loginService.getAuthOptions());
  }

  drop(connectionId: number, schema: string): Observable<Object> {
    return this.http.delete(this.url(connectionId, schema), this.loginService.getAuthOptions());
  }
}
