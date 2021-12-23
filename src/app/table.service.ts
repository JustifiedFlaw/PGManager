import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Column } from './models/column';
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
      url += `/${table.schemaName}/${table.tableName}`;
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

  getColumns(connectionId: number, table: Table): Observable<Column[]> {
    return this.http.get<Column[]>(this.url(connectionId, table) + '/columns', this.loginService.getAuthOptions());
  }

  addColumn(connectionId: number, table: Table, column: Column): Observable<Object> {
    return this.http.post(this.url(connectionId, table) + '/columns', column, this.loginService.getAuthOptions());
  }

  renameColumn(connectionId: number, table: Table, oldName: string, newName: string): Observable<Object> {
    let url = `${this.url(connectionId, table)}/columns/${oldName}?newName=${newName}`;
    return this.http.put(url, null, this.loginService.getAuthOptions());
  }

  dropColumn(connectionId: number, table: Table, columnName: string): Observable<Object> {
    let url = `${this.url(connectionId, table)}/columns/${columnName}`;
    return this.http.delete(url, this.loginService.getAuthOptions());
  }

  getPrimaryKey(connectionId: number, table: Table): Observable<string[]> {
    return this.http.get<string[]>(this.url(connectionId, table) + '/primarykey', this.loginService.getAuthOptions());
  }
}
