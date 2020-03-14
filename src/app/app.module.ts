import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { LoginComponent } from './components/login/login.component';
import { ApiService } from './service/api.service';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    SignUpComponent,
    QuestionsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
