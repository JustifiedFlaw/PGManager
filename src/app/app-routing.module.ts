import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { LoginGuard } from './login.guard';
import { ConnectionEditComponent } from './connection-edit/connection-edit.component';
import { ConnectionDeleteComponent } from './connection-delete/connection-delete.component';
import { ConnectionAddComponent } from './connection-add/connection-add.component';
import { ConnectionOverviewComponent } from './connection-overview/connection-overview.component';
import { DatabaseAddComponent } from './database-add/database-add.component';
import { TableAddComponent } from './table-add/table-add.component';
import { TableDeleteComponent } from './table-delete/table-delete.component';
import { TableSchemaComponent } from './table-schema/table-schema.component';
import { ColumnAddComponent } from './column-add/column-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'connections', component: ConnectionListComponent, canActivate: [LoginGuard] },
  { path: 'connections/add', component: ConnectionAddComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id', component: ConnectionEditComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/view', component: ConnectionOverviewComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/delete', component: ConnectionDeleteComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/databases/add', component: DatabaseAddComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/add', component: TableAddComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/delete', component: TableDeleteComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/schema', component: TableSchemaComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/columns/add', component: ColumnAddComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
