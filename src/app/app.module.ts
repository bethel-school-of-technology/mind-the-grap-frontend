import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { LoginComponent } from './components/login/login.component';
import { ApiService} from './service/api.service';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AssessmentEditComponent } from './components/assessment-edit/assessment-edit.component';
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { UserNavbarComponent } from './components/user-navbar/user-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    SignUpComponent,
    QuestionsComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    AssessmentComponent,
    ProfileComponent,
    AssessmentComponent,
    AssessmentEditComponent,
    ProfileEditComponent,
    UserNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
