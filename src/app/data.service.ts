import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Data } from './models/Data';
import { Table } from './models/table';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private http: HttpClient,
    private loginService: LoginService) { }

  url(connectionId: number, table: Table): string {
    var url = `${environment.apiUrl}/connections/${connectionId}/tables`;
    url += `/${table.schemaName}/${table.tableName}/data`;

    return url;
  }

  getAll(connectionId: number, table: Table, startRow: number = 0, rowCount: number = 100): Observable<Data> {
    var url = this.url(connectionId, table);
    url += `?startRow=${startRow}`;
    url += `&rowCount=${rowCount}`;
    return this.http.get<Data>(url, this.loginService.getAuthOptions());
  }
}