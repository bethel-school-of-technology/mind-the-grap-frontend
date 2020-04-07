import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/service/assessment.service';
import { QuestionService } from 'src/app/service/question.service';
import { Assessment } from 'src/app/models/assessment';
import { Response } from '../../models/response';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  public response: Response;
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private QuestionService: QuestionService
  ) { }

  ngOnInit(): void {
  }

getResponse() {
  const id = +this.route
}

}
