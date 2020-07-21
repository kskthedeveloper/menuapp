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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubMenuComponent,
    SubMenuRowComponent,
    SubMenuChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
