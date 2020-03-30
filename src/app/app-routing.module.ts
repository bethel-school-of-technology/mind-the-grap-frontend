import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
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


const routes: Routes = [
  // user signup page
  {
    path: 'signUp',
    component: SignUpComponent
  },
 
  // this will page will hold the assessment
  {
    path: 'question/:id',
    component: QuestionsComponent
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
  //About Page
  {
    path: 'about', 
    component: AboutComponent
  },
  //Contact Page
  {
    path: 'contact', 
    component: ContactComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'assessments',
    component: AssessmentComponent
  },
  {
    path: 'assessment/:id',
    component: AssessmentEditComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
