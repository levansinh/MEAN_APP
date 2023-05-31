import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateComponent } from './pages/projects/create/create.component';
import { EditComponent } from './pages/projects/edit/edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'project/create', component: CreateComponent},
  {path: 'project/edit/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
