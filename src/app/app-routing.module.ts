import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


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
    path:'login', component: LoginComponent
  },

  // for landing page once it is wired up.
  // {
  //   path: '',
  //   redirectTo: '/landing', 
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
