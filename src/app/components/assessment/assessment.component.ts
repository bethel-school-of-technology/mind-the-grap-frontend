import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Question } from '../../models/question';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from 'src/app/service/assessment.service';
import { Assessment } from 'src/app/models/assessment';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})

export class AssessmentComponent implements OnInit {
  private assessmentsRoute: AssessmentService; 
  public model: Assessment;

  assessments:any;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient,
    private assessmentService: AssessmentService
    ) {
      this.getAssessments();
     }

  ngOnInit() {
    
  }

  getAssessments(){
    this.assessmentService.getAssessments().subscribe((data) => {
      this.assessments = data;
    })
  }
}
