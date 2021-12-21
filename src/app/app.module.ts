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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ConnectionListComponent,
    UserNameDisplayComponent,
    BreadCrumbsComponent,
    ConnectionEditComponent,
    ConnectionDeleteComponent,
    ConnectionAddComponent
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
