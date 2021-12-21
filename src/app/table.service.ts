import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Table } from './models/table';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(
    private http: HttpClient,
    private loginService: LoginService) { }

  url(connectionId: number, table?: Table): string {
    var url = `${environment.apiUrl}/connections/${connectionId}/tables`;

    if (table) {
      url += `${table.schemaName}/${table.tableName}`;
    }

    return url;
  }

  getAll(connectionId: number): Observable<Table[]> {
    return this.http.get<Table[]>(this.url(connectionId), this.loginService.getAuthOptions());
  }

  add(connectionId: number, table: Table): Observable<Object> {
    return this.http.post(this.url(connectionId), table, this.loginService.getAuthOptions());
  }

  rename(connectionId: number, table: Table, newName: string): Observable<Object> {
    return this.http.put(this.url(connectionId, table) + '?newName=' + newName, null, this.loginService.getAuthOptions());
  }

  drop(connectionId: number, table: Table): Observable<Object> {
    return this.http.delete(this.url(connectionId, table), this.loginService.getAuthOptions());
  }
}
