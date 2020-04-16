import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AssessmentEditComponent } from './components/assessment-edit/assessment-edit.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ResultComponent } from './components/result/result.component';
import {AuthGuard} from './service/auth.guard';


const routes: Routes = [
  // user signup page
  {
    path: 'signUp',
    component: SignUpComponent
  },
  {
    path: 'question/:id',
    component: QuestionsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  // Home-Landing Page
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  //About + Contact Page
  {
    path: 'about', 
    component: AboutComponent
  },
  {
    path: 'contact', 
    component: ContactComponent
  },
  //Dashboard
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'assessments',
    component: AssessmentComponent,
    canActivate: [AuthGuard]
    
  },
  //This page has the assessment loaded on it.
  {
    path: 'assessments/:title',
    component: AssessmentEditComponent,
    canActivate: [AuthGuard]
  },
  //Profile + Profile Edit Page
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'profile_edit',
    component: ProfileEditComponent,
    canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
