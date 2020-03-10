import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuestionListComponent } from '../app/question-list/question-list.component';
import { QuestionsComponent } from '../app/questions/questions.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';


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
