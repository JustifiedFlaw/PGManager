import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
    ColumnListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
