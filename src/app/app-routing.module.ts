import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {SubMenuComponent} from './component/sub-menu/sub-menu.component';
import {AdminDashboardComponent} from './component/admin-dashboard/admin-dashboard.component';
import {AdminDashboardEditComponent} from './component/admin-dashboard-edit/admin-dashboard-edit.component';
import {LoginComponent} from './admin/login/login.component';
import {AuthGuard} from './service/auth.guard';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, data: {animation: 'HomePage'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'submenu/:title', component: SubMenuComponent, data: {animation: 'MenuPage'}},
  {path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard]},
  {path: 'admin-edit/:name', component: AdminDashboardEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
