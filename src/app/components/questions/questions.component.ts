import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    // this.getQuestions();
  }

  //this code wont work unitl backend is working
  // getQuestions() {
  //   this.http.get(Question[]>(this.questionsRoute).subscribe(questions => {
  //     this.questions = questions;
  //   }))
  // }


}
