import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  Question:any = [];
  
  constructor(
    private apiService: ApiService
  ) {this.readQuestion }

  ngOnInit() { }

  readQuestion(){
    this.apiService.getQuestions().subscribe((data) => {
      this.Question = data;
    })
  }

}
