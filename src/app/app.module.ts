import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SubMenuComponent } from './component/sub-menu/sub-menu.component';
import { SubMenuRowComponent } from './component/sub-menu-row/sub-menu-row.component';
import { SubMenuChoiceComponent } from './component/sub-menu-choice/sub-menu-choice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubMenuFancyChoiceComponent } from './component/sub-menu-fancy-choice/sub-menu-fancy-choice.component';
import { SubMenuHorizontalLargeCardComponent } from './component/sub-menu-horizontal-large-card/sub-menu-horizontal-large-card.component';
import { SubMenuVerticalLargeCardComponent } from './component/sub-menu-vertical-large-card/sub-menu-vertical-large-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import { AdminDashboardEditComponent } from './component/admin-dashboard-edit/admin-dashboard-edit.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import { NgImageSliderModule } from 'ng-image-slider';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubMenuComponent,
    SubMenuRowComponent,
    SubMenuChoiceComponent,
    SubMenuFancyChoiceComponent,
    SubMenuHorizontalLargeCardComponent,
    SubMenuVerticalLargeCardComponent,
    AdminDashboardComponent,
    AdminDashboardEditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    NgImageSliderModule,
    FormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
