import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';


import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HeaderComponent } from './layouts/components/header/header.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateComponent } from './pages/projects/create/create.component';
import { EditComponent } from './pages/projects/edit/edit.component';
import { AsideComponent } from './components/aside/aside.component';

import { TasksComponent } from './pages/task/tasks/tasks.component';
import { EditTaskComponent } from './pages/task/edit/edit.component';
import { CreateTaskComponent } from './pages/task/create/create.component';
import { MemberComponent } from './pages/member/member.component';
import { AuthGuard } from './shared/auth.guard';
import { InfomationComponent } from './pages/infomation/infomation.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DefaultLayoutComponent,
    HeaderComponent,
    ProjectComponent,
    SignupComponent,
    CreateComponent,
    EditComponent,
    AsideComponent,
    TasksComponent,
    MemberComponent,
    InfomationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    ToastrModule.forRoot({
      timeOut:2000
    })
  ],
  providers: [
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
    AuthGuard,
// ExpenseService,SellDetailService,AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
