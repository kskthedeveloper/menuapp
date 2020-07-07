import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './component/home/home.component';
import {SubMenuComponent} from './component/sub-menu/sub-menu.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'submenu/:title', component: SubMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
