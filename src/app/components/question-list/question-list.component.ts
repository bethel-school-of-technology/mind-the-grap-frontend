import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Input() question: Question;
  @Output() questionAnswer: EventEmitter<any> = new EventEmitter();
  private questionsRoute: ApiService; 
  public model: Question;

  Question:any = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private apiService: ApiService
    ) {
      //this.readQuestion();
     }

  ngOnInit() {
    
  }

  // readQuestion(){
  //   this.apiService.getQuestions().subscribe((data) => {
  //     this.Question = data;
  //   })
  // }
 
}
