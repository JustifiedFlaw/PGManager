import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConnectionListComponent } from './connection-list/connection-list.component';
import { LoginGuard } from './login.guard';
import { ConnectionEditComponent } from './connection-edit/connection-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/connections', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'connections', component: ConnectionListComponent, canActivate: [LoginGuard] },
  { path: 'connections/:id', component: ConnectionEditComponent, canActivate: [LoginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
