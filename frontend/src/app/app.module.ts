import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'


import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HeaderComponent } from './layouts/components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectComponent } from './pages/project/project.component';
import { SignupComponent } from './pages/signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    ProjectComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
