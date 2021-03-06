import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { UserNameDisplayComponent } from './user-name-display/user-name-display.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { ConnectionEditComponent } from './connection-edit/connection-edit.component';
import { ConnectionDeleteComponent } from './connection-delete/connection-delete.component';
import { ConnectionAddComponent } from './connection-add/connection-add.component';
import { ConnectionOverviewComponent } from './connection-overview/connection-overview.component';
import { DatabaseListComponent } from './database-list/database-list.component';
import { TableListComponent } from './table-list/table-list.component';
import { DatabaseAddComponent } from './database-add/database-add.component';
import { TableAddComponent } from './table-add/table-add.component';
import { TableDeleteComponent } from './table-delete/table-delete.component';
import { TableSchemaComponent } from './table-schema/table-schema.component';
import { ColumnListComponent } from './column-list/column-list.component';
import { ColumnAddComponent } from './column-add/column-add.component';
import { ColumnDeleteComponent } from './column-delete/column-delete.component';
import { ColumnRenameComponent } from './column-rename/column-rename.component';
import { TableDataViewComponent } from './table-data-view/table-data-view.component';
import { TableDataDeleteComponent } from './table-data-delete/table-data-delete.component';
import { TableDataEditComponent } from './table-data-edit/table-data-edit.component';
import { TableDataAddComponent } from './table-data-add/table-data-add.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { TableRenameComponent } from './table-rename/table-rename.component';
import { SchemaListComponent } from './schema-list/schema-list.component';
import { SchemaDeleteComponent } from './schema-delete/schema-delete.component';
import { SchemaAddComponent } from './schema-add/schema-add.component';
import { SchemaRenameComponent } from './schema-rename/schema-rename.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConnectionListComponent,
    UserNameDisplayComponent,
    BreadCrumbsComponent,
    ConnectionEditComponent,
    ConnectionDeleteComponent,
    ConnectionAddComponent,
    ConnectionOverviewComponent,
    DatabaseListComponent,
    TableListComponent,
    DatabaseAddComponent,
    TableAddComponent,
    TableDeleteComponent,
    TableSchemaComponent,
    ColumnListComponent,
    ColumnAddComponent,
    ColumnDeleteComponent,
    ColumnRenameComponent,
    TableDataViewComponent,
    TableDataDeleteComponent,
    TableDataEditComponent,
    TableDataAddComponent,
    MessageViewComponent,
    TableRenameComponent,
    SchemaListComponent,
    SchemaDeleteComponent,
    SchemaAddComponent,
    SchemaRenameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
