import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assessment-edit',
  templateUrl: './assessment-edit.component.html',
  styleUrls: ['./assessment-edit.component.css']
})
export class AssessmentEditComponent implements OnInit {

  @Input() question: Question;
  @Output() questionAnswer: EventEmitter<any> = new EventEmitter();
  private assessmentsRoute: ApiService; 
  public model: Question;

  Question:any = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private apiService: ApiService
    ) {
      this.readQuestion();
     }

  ngOnInit() {
    
  }

  readQuestion(){
    this.apiService.getQuestions().subscribe((data) => {
      this.Question = data;
    })
  }

}
