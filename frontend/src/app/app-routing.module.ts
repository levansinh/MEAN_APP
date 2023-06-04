import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProjectComponent } from './pages/projects/project/project.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreateComponent } from './pages/projects/create/create.component';
import { EditComponent } from './pages/projects/edit/edit.component';

import { TasksComponent } from './pages/task/tasks/tasks.component';
import { EditTaskComponent } from './pages/task/edit/edit.component';
import { CreateTaskComponent } from './pages/task/create/create.component';

import { MemberComponent } from './pages/member/member.component';

import { InfomationComponent } from './pages/infomation/infomation.component';

import { AuthGuard } from './shared/auth.guard';
import { CheckLoginGuard } from './shared/check-login.guard';
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },

  { path: '', component: HomeComponent },
  // auth
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //  project
  { path: 'project', component: ProjectComponent, canActivate: [AuthGuard] },
  { path: 'project/create', component: CreateComponent,canActivate: [AuthGuard]  },
  { path: 'project/edit/:id', component: EditComponent,canActivate: [AuthGuard]  },
  // task
  { path: 'task', component: TasksComponent },
  { path: 'task/create', component: CreateTaskComponent },
  { path: 'task/edit/:id', component: EditTaskComponent },

  //user
  { path: 'user', component: MemberComponent,canActivate:[AuthGuard] },
  // infomation
  { path: 'infomation', component: InfomationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
