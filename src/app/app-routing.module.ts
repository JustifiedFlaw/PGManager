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
import { ColumnDeleteComponent } from './column-delete/column-delete.component';
import { ColumnRenameComponent } from './column-rename/column-rename.component';
import { TableDataViewComponent } from './table-data-view/table-data-view.component';
import { TableDataDeleteComponent } from './table-data-delete/table-data-delete.component';
import { TableDataEditComponent } from './table-data-edit/table-data-edit.component';
import { TableDataAddComponent } from './table-data-add/table-data-add.component';
import { TableRenameComponent } from './table-rename/table-rename.component';
import { SchemaDeleteComponent } from './schema-delete/schema-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'connections', component: ConnectionListComponent, canActivate: [LoginGuard] },
  { path: 'connections/add', component: ConnectionAddComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id', component: ConnectionEditComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/view', component: ConnectionOverviewComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/delete', component: ConnectionDeleteComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/databases/add', component: DatabaseAddComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/schemas/:schema/delete', component: SchemaDeleteComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/add', component: TableAddComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/delete', component: TableDeleteComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/rename', component: TableRenameComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/schema', component: TableSchemaComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/columns/add', component: ColumnAddComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/columns/:column/delete', component: ColumnDeleteComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/columns/:column/rename', component: ColumnRenameComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/data', component: TableDataViewComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/data/delete', component: TableDataDeleteComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/data/edit', component: TableDataEditComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id/tables/:schema/:table/data/add', component: TableDataAddComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
